import React, {Component} from 'react';
import MyComponent from "./MyComponent";
import MyClassComponent from "./MyClassComponent"
import Counter from "./Counter";
import Say from "./Say";

class App extends Component {
  render() {
    return (
      <>
        <MyComponent name="React"/>
        <MyComponent>리액트</MyComponent>
        <MyClassComponent name="Class" favoriteNumber={5}>애기</MyClassComponent>
        <Counter />
        <Say />
      </>
    )
  }
}

export default App;