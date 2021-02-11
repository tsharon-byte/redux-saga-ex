import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, loadData } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.auth.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => dispatch(decrement());
  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(loadData())}>Load data</button>
      </div>
    </div>
  );
}

export default App;
