import React, {Component} from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const {number} = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => {
          this.setState((prevState, props) => {
            return {
              number: prevState.number + 1
            }
          }, () => {
            console.log("setState가 호출되었습니다.");
          });
          this.setState((prevState, props) => {
            return {
              number: prevState.number + 1
            }
          });
        }}>
          +1
        </button>
      </div>
    )
  }
}

export default Counter;