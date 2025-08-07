import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const decrement = () => {
    if (count <= 0){
      return;
    } else{
      setCount(count - 1)
    }
  }

  const increment = () => {
    if (count >= 20){
      return;
    } else {
    setCount(count + 1) 
    }

  }

  return (
    <>
     <div className="conatiner">
      <h1>Counter App</h1>
      <p>Click the buttons to increment or decrement the count.</p>
      <p>Count cannot go below 0 or above 20.</p>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
     </div>
    </>
  )
}

export default App
