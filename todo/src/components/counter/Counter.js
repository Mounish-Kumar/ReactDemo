import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "../../store/counterSlice";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    const { count, increment, decrement, incrementByValue, decrementByValue } =
      this.props;

    return (
      <div>
        <button onClick={() => decrementByValue(5)}>-5</button>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
        <button onClick={() => incrementByValue(5)}>+5</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  count: store.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
};

export default connect(mapStoreToProps, mapDispatchToProps)(Counter);
