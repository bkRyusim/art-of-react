# Chapter 7. 컴포넌트 라이프사이클

## 라이프사이클 메서드

라이프사이클 메서드는 총 아홉 가지임. `Will` 접두사가 붙은 메서드는 어떤 작업의 작동 전에 실행되고, `Did`접두사가 붙은 메서드는 어떤 작업의 작동 후에 실행되는 메서드이다.
라이프사이클은 `Mount`, `Update`, `Unmount` 세가지 카테고리로 나눔.

### Mount
DOM이 생성되고 웹 브라우저 상에 나타나는 것을 마운트라고 함. 이 때 아래의 순서로 메서드가 호출됨.
1. 컴포넌트 만들기
2. constructor
3. getDerivedStateFromProps
4. render
5. componentDidMount

### Update
다음 네 가지 경우에 업데이트합니다.
- props가 바뀔 때
- state가 바뀔 때
- 부모 컴포넌트가 리렌더링될 때
- this.forceUpdate로 강제로 렌더링을 트리거할 때

이 경우 다음의 과정으로 메서드를 호출합니다.
1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

### Unmount
마운트의 반대 과정으로 컴포넌트를 DOM에서 제거합니다.
`componentWillUnmount`만 호출됩니다.

## 라이프사이클 메서드 살펴보기
### render()
- 라이프사이클 메서드 중 유일한 필수 메서드.
- 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 `setState`를 사용하면 안 되고, `DOM`에 접근해서도 안됨.
- `DOM`에 접근하거나 `state`를 변화하고싶은 경우 c`omponentDidMount`에서 처리해야 함.

### constructor
- 생성자 메서드
- 컴포넌트를 만들 때 처음 실행되고, 초기 `state`를 설정할 수 있음.

### getDerivedStateFromProps
- 리액트 16.3버전 이후 새로 만들어진 라이프사이클 메서드.
- `props`로 받아온 값을 `state`에 동기화 시키는 용도로 사용
- 마운트될 때와 업데이트될 때 사용.

### componentDidMount
- 컴포넌트를 만들고 초기 렌더링을 마친 후 실행됨.
- 다른 자바스크립트 라이브러리, 프레임워크 호출, 이벤트 등록, 비동기 요청 작업 등을 처리하면 됨.

### shouldComponentUpdate
- `props` 또는 `state`를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드.
- 따로 생성하지 않으면 항상 `true`반환.
- 이 메서드가 `false` 값을 리턴하면 업데이트 과정은 여기서 중단됨.
- 성능 최적화를 위해 리렌더링을 방지할 때 사용.

### getSnapshotBeforeUpdate
- 리액트 16.3버전 이후 새로 만들어진 라이프사이클 메서드.
- `render()`에서 렌더링된 결과물이 브라우저에 실제 반영되기 직전에 호출됨.
- 이 메서드의 반환값은 `componentDidUpdate()`의 세번째 파라미터인 `snapshot` 값으로 전달받을 수 있음.
- 주로 업데이트하기 직전의 값을 참고할 때 사용.

### componentDidUpdate
- 리렌더링을 완료한 후 실행하므로 DOM 처리를 해도 됨.
- `prevProps`, `prevState`를 이용해 컴포넌트의 이전 데이터에 접근 가능.
- `getSnapshotBeforeUpdate()`에서 반환한 `snapshot`이용 가능.

### componentWillUnmount
- 컴포넌트를 DOM에서 제거할 때 실행.
- `componentDidMount()`에서 등록한 비동기 이벤트, 타이머 스케쥴이 있다면 여기서 제거해야합니다.

### componentDidCatch
- 리액트 16버전 이후 새로 만들어진 라이프사이클 메서드.
- 컴포넌트 렌더링 도중 에러가 발생할 때 오류 UI를 보여줄 수 있게 해줍니다.