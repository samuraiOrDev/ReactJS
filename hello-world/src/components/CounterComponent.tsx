import { useState } from 'react'

export const CounterComponent = () => {

  const [count, setCount] = useState(0)
  const handleNextCount = () => setCount(count + 1)
  const handlePrevCount = () => setCount(count - 1)
  const handleResetCount = () => setCount(0)
  return (
    <>
      <h1>Counter Component</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={handlePrevCount}>-</button>
        <button onClick={handleResetCount}>Reset</button>
        <button onClick={handleNextCount}>+</button>

      </div>
    </>
  )
}
