# Chapter 8. Hooks

`Hooks`는 16.8버전에 새로 도입된 기능으로, `함수 컴포넌트`에서도 `클래스 컴포넌트`의 여러 기능을 사용할 수 있게 해주는 기능이다.

## 내장 Hooks
### useState
- 가장 기본적인 `Hook`
- 함수 컴포넌트에서 상태 관리를 위해 사용.
  ```jsx
  const [value, setValue] = useState(0);
  ```
- `state` 변수와 `setter`를 반환하며 비구조화 할당을 이용해 쉽게 사용할 수 있다.
- `state` 초기값 설정 가능.

### useEffect
- 리액트 컴포넌트가 렌더링될 때 마다 특정 작업을 수행하도록 할 수 있는 `Hook`
- `componentDidMount` + `componentDidUpdate`
  ```jsx
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
  });
  ```
- 두번째 파라미터에 비어 있는 배열을 넣어 주면 `마운트`될 때만 실행됨.
- 두번쨰 파라미터로 전달하는 배열 안에 원하는 `state`를 넣으면 해당 `state`가 업데이트 될 때만 작업 수행.
- `cleanup`함수를 반환하면 컴포넌트가 마운트되기 전이나 언마운트 되기 직전에 `cleanup`을 수행함.
- 이 때 두번째 파라미터에 빈 배열을 전달하면 `언마운트` 될 때만 실행.

### useReducer
- `reducer` : 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션값을 전닯다아 새로운 상태를 반환하는 함수.
- 리듀서에서 새로운 상태를 만들 때는 반드시 불변성을 지켜야 함.
  ```jsx
  function reducer(state, action) {
    return {... };
  }
  ```

### useMemo
- 함수 컴포넌트 내부에서 발생하는 연산을 최적화함.
- 특정 `state`가 바뀌는 경우에만 연산이 수행되도록 할 수 있음.
  ```jsx
  const avg = useMemo(() => getAverage(list), [list]);ß
  ```

### useCallBack
- `useMemo`와 비슷하게 렌더링 성능 최적화에 사용.
- 컴포넌트 렌더링이 자주 발생하거나 렌더링할 컴포넌트 개수가 많아지면 이 부분을 최적화하는 것이 좋음.
- 두번째 인자에 빈 배열을 주면 컴포넌트 렌더링 때 만든 함수를 계속 사용.
- `state`를 넣으면 해당 `state`가 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 됨.
  ```jsx
  const onChange = useCallback(e => setNumber(e.target.value), []);
  ```

### useRef
- `함수 컴포넌트`에서 `ref`를 쉽게 사용할 수 있도록 해줌.
- `useRef()`를 사용하면 반환된 객체의 `current`값이 실제 엘리먼트를 가리킴.
- 렌더링과 관련되지 않은 로컬변수를 생성할 때도 사용 가능.
  ```jsx
  const id = useRef(1);
  ```

## 커스텀 Hooks
여러 컴포넌트에서 비슷한 기능을 이용하는 경우 커스텀 hooks를 만들어 로직을 재사용할 수 있음.

