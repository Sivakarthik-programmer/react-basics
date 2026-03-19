// 1. Create a ref called inputRef
// 2. Attach it to an input field
// 3. When component loads — auto focus the input using useEffect
// 4. Add a button "Clear" that clears the input value
//    using the ref directly (not state!)
// 5. Add a button "Focus" that focuses the input again

import {useRef, useEffect} from 'react'

function AutoFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const clearInput = () => {
    inputRef.current.value = '';
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Auto-focused input" />
      <button onClick={clearInput}>Clear</button>
      <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default AutoFocus