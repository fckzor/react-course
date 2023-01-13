import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const increement = () => setCount(count + 1)
  const decreement = () => setCount(count - 1)
  
  return (
    <div className="container">
      <div className="count-wrap">
        <button onClick={decreement}>-</button>
        <span>{count}</span>
        <button onClick={increement}>+</button>
      </div>
    </div>
  )
}

export default App
