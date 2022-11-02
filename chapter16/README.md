# Chapter 16. 리덕스 라이브러리 이해하기

## Redux
- 현재 시점에서 `createStore()`가 deprecated되어 `configureStore()`를 이용할 것을 추천함.

### 액션

- 상태 변화가 필요한 경우 `액션` 발생
- 액션 객체는 반드시 `type`필드를 갖고 있어야 함. reducer의 action 같은 느낌.
  ```js
  {
    type: 'ADD_TODO',
    data: {
      id: 1,
      text: '리덕스 배우기'
    }
  }
  ```

### 액션 생성 함수

- 액션 객체를 만들어 주는 함수
  ```js
  function addTodo(data) {
    return {
      type: 'ADD_TODO',
      data
    }
  }
  
  const changeInput = text => ({
    type: 'CHANGE_INPUT',
    text
  });
  ```

### reducer

- 액션을 만들어 발생시키면 리듀서가 액션 객체를 파라미터로 받고 새로운 상태를 반환함.

```js
const initialState = {
  counter: 1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
```

### store

- 애플리케이션의 상태와 리듀서, 내장 함수를 갖고 있는 저장소.
- 한 프로젝트는 하나의 store를 갖고 있음.

### dispatch
- 액션을 발생시키는 스토어 내장 함수.
- `dispatch(action)` 형태로 호출
- 호출 시 리듀서 함수 호출하여 새로운 상태 생성

### subscribe
- `store`의 내장 함수.
- 리스너 함수를 파라미터로 넣으면 액션이 디스패치되어 상태가 업데이트될 때 마다 호출됨.
```js
const listener = () => console.log('상태가 업데이트됨');
const unsubscribe = store.subscribe(listener);
unsubscribe();
```

## 리덕스 규칙
- 단일 스토어
- 읽기 전용 상태
- 리듀서는 순수한 함수
  - 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받음
  - 파라미터 외에는 의존해서는 안 됨.
  - 이전 상태는 절대로 건드리지 않고 새로운 상태 객체 반환(불변성)
  - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 같은 결과값 반환(멱등성)