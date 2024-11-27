import './App.css'
import MyButton from './components/button'
import Inicio from './paginas/inicio'
import { Routes, Route } from 'react-router-dom'
import Article from './components/article-box'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Inicio />} />
        <Route path='nosotros' element={<Article />} />
        <Route path='contacto' element={<MyButton name='contacto' />} />
        <Route path='productos' element={<MyButton name='productos' />} />
      </Routes>
    </>
  )
}

export default App
