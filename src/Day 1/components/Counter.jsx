
// - count (the current value)
// - onIncrement (function to increment)
// - onDecrement (function to decrement)
// - onReset (function to reset)

function Counter({ count, onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Counter