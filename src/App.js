import { useState} from 'react'

import './App.css'



const App = () => {
  const [count, setCount] = useState(0)

  const clickRandom = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    setCount(randomNum)
  }

  return (
    <div className="bg-container">
      <div className="card">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" className="button-color" onClick={clickRandom}>
          Generate
        </button>
        <p>{count}</p>
      </div>
    </div>
  )
}
export default App
