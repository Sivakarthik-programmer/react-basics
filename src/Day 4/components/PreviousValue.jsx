// 1. Have a useState for count (starts at 0)
// 2. Have a useRef to store the PREVIOUS count value
// 3. Display:
//    Current: 5
//    Previous: 4
// 4. Add increment button

import {useState, useRef} from 'react'

function PreviousValue() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  const increment = () => {
    previousCount.current = count;
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default PreviousValue