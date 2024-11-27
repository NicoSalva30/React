import './App.css'
import MyButton from './components/button'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element= { <MyButton name='inicio' />} />
        <Route path='nosotros' element={<MyButton name='nosotros' />} />
        <Route path='contacto' element={<MyButton name='contacto' />} />
        <Route path='productos' element={<MyButton name='productos' />} />
      </Routes>
    </>
  )
}

export default App
