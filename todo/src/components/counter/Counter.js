import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrementCount}>-</button>
        {this.state.count}
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default Counter;
