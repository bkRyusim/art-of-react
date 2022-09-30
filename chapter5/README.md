# Chapter 5. ref

## id와 ref
### id
- `HTML`에서 DOM 요소에 식별자를 부여하는 방법
- CSS, Javascript 등에서 요소를 찾을 때 사용
- 하나의 DOM 트리에서 `id`는 유일해야 함. 
- 하지만 같은 컴포넌트를 여러번 사용하는 경우를 가정하면, `id`가 겹치게 됨.

### ref
- ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동함.
- **DOM을 직접적으로 건드려야할 때**만 사용.
- 함수 컴포넌트에서 ref를 사용하기 위해서는 `Hooks`를 사용해야 함.

## ref 사용
### Callback 함수 이용
```jsx
<input ref={(ref) => {this.input=ref}} />
```
위의 코드로 `this.input`은 input 요소의 DOM을 가리킴.

### `createRef()`를 이용한 설정
```jsx
import React, {Component} from 'react';

class RefSample extends Component {
  input = React.createRef();
  
  handleFocus = () => this.input.current.focus();
  
  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    )
  }
}
```
`createRef()`를 이용해 먼저 변수를 만들고 `ref`를 달고자 하는 요소에 `props`로 넣어주면 됨.
나중에 DOM에 접근할 때는 `.current`를 붙여야 함.