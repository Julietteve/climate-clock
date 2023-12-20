import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <img className="climate-logo" width="80%" src='https://images.squarespace-cdn.com/content/v1/600f8dac4894874fe905dce4/37f505cf-b5f0-482d-ac70-dd5561d0b1d9/CC-LOGO-HORIZ+%281%29.png?format=1500w'></img>
        <climate-clock/>
    </>
  )
}

export default App
