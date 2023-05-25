import { useState } from 'react'
import './App.css'
import BasicGrid from './components/BasicGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicGrid/>
    </>
  )
}

export default App
