import '../estilos/box.css'
import MyButton from './button'
import Torta from '../img/tortaChocolate.webp'

function Article () {
  return (
    <div className='article-box'>
      <img src={Torta} alt='' />
      <div className='article-data'>
        nombre
        precio
        descripcion
        <MyButton />
        <MyButton />
        <MyButton className='boton-carrito'/>
      </div>
    </div>
  )
}

export default Article
