import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExampleContainer from './Components/ExampleComponent/ExampleContainer'
import Boton from './Components/Boton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {/* Ejemplo de botones reutilizables */}
        {/* ******************************************************** */}
        <div className=' flex mb-4'>
        <div className='mr-8'>
        <Boton
         text={"acept"}/>
         </div>
         <div className='mr-8'>
         <Boton
         text={"cancel"}/>
         </div>
         <Boton
         text={"edit"}/>
      </div>
      </div>
      {/* ******************************************************** */}
      <ExampleContainer/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </div>
  )
}

export default App
