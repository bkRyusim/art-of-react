# Chapter 1. 리액트 시작

## 리액트 이해
### 컴포넌트
- 특정 부분이 어떻게 생길지 정하는 선언체.
- 단순히 HTML 코드를 반환하는 타 프레임워크의 `템플릿`과는 다르게, 재사용이 가능한 여러 API들을 포함하고 있는 요소.
### 초기 렌더링
- 맨 처음 어떻게 보일지 렌더링 하는 것을 `초기 렌더링` 이라고 함.
- `render()` 함수로 컴포넌트를 반환하여 컴포넌트가 어떻게 생겼는지 정의.
- 또 다른 컴포넌트를 내부에 포함하고 반환할 수 있고, 이 경우 내부에 포함한 컴포넌트의 `render()` 함수를 재귀적으로 호출하여 렌더링함.
- `render()` 함수로 HTML 마크업 코드를 생성하고, 이를 `DOM`에 주입함.
### 조화 과정(Reconciliation)
- 데이터(state)가 변경될 때 `DOM`을 업데이트 하는 과정.
- 루트부터 모두 업데이트 하는 것이 아니라 바뀐 부분만 업데이트.
- 단순히 값만 바꾸는게 아니라, `render()`함수를 재호출해 `DOM` 트리에서 수정된 부분을 새로운 요소로 갈아끼움.
- 수정 전 `DOM` 트리와 수정 후 `DOM` 트리를 최소 알고리즘으로 비교한 후 바뀐 부분만 수정.

## 리액트 특징
### DOM(Document Object Model)
- 객체로 문서 구조를 표현하는 방법
- `트리` 형태
- 기존 웹에서는 `DOM`이 수정되면 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트하는데 이 과정이 길고 비효율적임.
- 리액트는 `Virtual DOM`을 이용해 업데이트 과정을 추상화하고 최소한의 단계로 업데이트함.

### Virtual DOM
- 실제 `DOM`에 접근하여 수정하지 않고, 이를 추상화한 Javascript 객체를 구성하여 사용함.
- `DOM`의 사본의 개념.
- `Virtual DOM`을 이용하면 다음의 절차로 업데이트함:
  1. 데이터를 업데이트하면 전체 UI를 `Virtual DOM`에 리렌더링.
  2. 이전 `Virtual DOM`과 비교.
  3. 바뀐 부분만 실제 `DOM`에 업데이트
- 작업이 매우 단순한 페이지의 경우(DOM 조작을 빡세게 하지 않는 경우)에는 리액트를 사용하지 않는 편이 더 나은 성능을 보임.

## 작업환경
- 본 `art-of-react` Repository에서는 `npm`, `Webstorm`을 이용하여 프로젝트를 진행할 예정임.
- `npm create react-app <project name>` 명령으로 프로젝트 생성.
- `npm start` 명령으로 서버 실행.