# Chapter 2. JSX

## 코드 분석

### 모듈

- `import` 구문을 이용해 외부 파일 코드를 불러옴.

```javascript
import logo from './logo.svg';
import './App.css';
```

- 브라우저가 아니라 `Node.js`에서 지원하는 기능. `Node.js`는 원래 `require`키워드로 불러옴.
- 브라우저에서도 이용하기 위해 `Webpack`등 번들러를 이용하게 됨.
  - 프로젝트를 하나로 묶어 `Javascript`, `CSS`, 등 리소스들을 하나로 묶어 브라우저에서 실행할 수 있도록 해줌.
- `babel`을 사용하면 최신 문법의 Javascript를 브라우저 호환성을 위해 ES5 문법으로 변환해줌.
- `create-react-app`이 자동으로 다 설정해줌.

## JSX

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

- `HTML` 문법과 비슷하게 생겼지만 `Javascript` 확장 문법.
- `babel`을 통해 `JSX`같은 여러 확장 문법을 사용할 수 있음.
- 보기 쉽고 익숙하며(HTML과 유사) 활용도가 높다는 장점이 있음.
- 트리 구조를 위해 단 하나의 요소로 감싸야 함. 예시로 아래 코드는 오류.

```jsx
// Error
function App() {
  return (
    <h1>1</h1>
  <h2>2</h2>
)
  ;
}
```

- 꼭 `div` 요소로 감싸고 있지 않는 경우 `Fragment`라는 요소로 감싸면 됨.

```jsx
function App() {
  return (
    <Fragment>
      <h1>1</h1>
      <h2>2</h2>
    </Fragment>
  );
}
```

- 혹은 아래와 같이 간결하게 작성 가능

```jsx
function App() {
  return (
    <>
      <h1>1</h1>
      <h2>2</h2>
    </>
  );
}
```

- `<br>`, `<hr>` 등 HTML에서는 안 닫아도 되는 애들도 여기선 꼭 닫아야 함.

### Javascript표현식

- `Javascript` 표현식을 사용하고 싶으면 `{}`로 감싸주면 됨.

```jsx
function App() {
  const name = "리액트";
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
```

### 조건문

- `if`문은 사용할 수 없음. 대신 `{}` 안에 삼항연산자로 표현 가능.
- `&&` 연산자를 이용해서 `falsy`한 값이 아무것도 나타나지 않는 것을 이용할 수도 있음.
  - 다만 0은 화면에 표시됨.

### CSS

- 스타일 속성은 `camelCase`로 작성.
- `class` 대신 `className` 키워드 사용.
