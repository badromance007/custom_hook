import './App.css';
import useAntiCounter from './custom_hooks/useAntiCounter';
import useCounter from './custom_hooks/useCounter';

function App() {

  const [number, add] = useCounter()
  const {count, decrement} = useAntiCounter(10)

  return (
    <div>
      <h1>The count is {number}</h1>
      <button onClick={add}>Add 1</button>
      <br />
      <h1>The minus count is {count}</h1>
      <button onClick={decrement}>Minus 1</button>
    </div>
  );
}

export default App;
