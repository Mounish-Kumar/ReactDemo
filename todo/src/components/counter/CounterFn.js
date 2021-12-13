import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "../../store/counterSlice";

export default function Counter(props) {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementByValue(5))}>-5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByValue(5))}>+5</button>
    </div>
  );
}
