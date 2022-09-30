# Chapter 3. 컴포넌트

컴포넌트는 `클래스형 컴포넌트`, `함수 컴포넌트` 두가지로 선언할 수 있다. `함수 컴포넌트`는 선언하기 훨씬 편하고, 메모리 자원 및 배포 파일 크기 면에서 유리하다. 하지만 `함수 컴포넌트`는 `state`와
라이프사이클 API를 사용하기 위해서 `Hooks`라는 별도의 기능을 이용해야 한다.

리액트 공식 문서는 `함수 컴포넌트`와 `Hooks` 사용을 권장한다.

## 클래스형 컴포넌트

```jsx
import React, {Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}

export default App;
```

- `ES6`의 `Class` 문법을 이용하여 컴포넌트 정의
- `render()` 메소드가 꼭 있어야 하고 `JSX`를 반환해야함.
- `state`, 라이프사이클 기능을 사용할 수 있고, 임의 메서드 정의 가능.

## props
- 자식 컴포넌트로 값을 넘길 떄 사용. 태그 내에 `HTML attribute` 문법로 넘겨주기 가능.
- `string`은 `""`로, `number`는 `{}`로 감싸서 넘겨줌.
- 태그 사이에 있는 값은 `props.children`으로 넘어감.
- `PropTypes`를 이용하면 런타임에서 `props`로 넘어온 값의 타입을 검증할 수 있음.

## state
- 컴포넌트 내부에서 바뀔 수 있는 값.
- 반드시 `setState()` 혹은 `useState()`를 통해 전달받은 세터 함수를 사용해서 바꾸어야 함.