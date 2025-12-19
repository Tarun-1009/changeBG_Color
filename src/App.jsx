import { useState } from 'react'
import './App.css'

function App() {
  const [colour, setColour] = useState("white")

  return (
    <>
      <div style={{backgroundColor:colour
        ,height:'98vh'
      }}>
        <div>
          <button onClick={() => setColour("red")}>RED</button>
          <button onClick={() => setColour("yellow")}>YELLOW</button>
          <button onClick={() => setColour("blue")}>BLUE</button>
          <button onClick={() => setColour("green")}>GREEN</button>
          <button onClick={() => setColour("purple")}>PURPLE</button>
          <button onClick={() => setColour("orange")}>ORANGE</button>
          <button onClick={() => setColour("pink")}>PINK</button>
          <button onClick={() => setColour("olive")}>OLIVE</button>
          <button onClick={() => setColour("teal")}>TEAL</button>
          <button onClick={() => setColour("white")}>WHITE</button>
          <button onClick={() => setColour("black")}>BLACK</button>
        </div>
      </div>
    </>
  )
}

export default App
