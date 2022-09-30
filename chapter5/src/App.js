import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import React, {Component} from "react";

class App extends Component {
  render() {
    return (
      <div>
        <ValidationSample/>
        <ValidationSample/>
        <ScrollBox ref={ref => this.scrollBox = ref}/>
        <button
          onClick={() => this.scrollBox.scrollToBottom()}
        >
          맨 밑으로
        </button>
      </div>

    );
  }
}

export default App;
