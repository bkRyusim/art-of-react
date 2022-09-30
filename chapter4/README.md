# Chapter 4. 이벤트 핸들링

## 리액트의 이벤트 시스템
### 이벤트
- `HTML`의 이벤트와 동일한 인터페이스.
- 몇 가지 주의점이 있음.
  1. 이벤트 이름은 `camelCase`.
  ```jsx
  <button onClick={onClickEnter}>입장</button>
  ```
  2. 자바스크립트 코드가 아닌 함수 형태의 값을 전달
  3. DOM 요소에만 이벤트를 설정할 수 있음. (컴포넌트에 자체적으로 이벤트를 설정할 수는 없음)
  ```jsx
  //불가능
  <MyComponent onClick={onClickHandler} />
  ```
  
### 이벤트 종류
- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

## 이벤트 연습
### SyntheticEvent
```jsx
class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="무엇이든 입력해 보세요"
          onChange={
            (e) => {
              console.log(e);
            }
          }
        />
      </div>
    );
  }
}
```
- 콜백 함수의 `e`에는 `SyntheticEvent`, 웹 브라우저의 네이티브 이벤트를 감싸는 객체가 전달됨.
- `SyntheticEvent`는 이벤트가 끝나면 초기화되기 떄문에 비동기적으로 접근하고 싶으면 `e.persist()` 함수를 호출해야함.
- `e.target.name`으로 접근하면 이벤트가 발생한 DOM 객체의 `name`을 알 수 있음.