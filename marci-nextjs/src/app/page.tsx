import NavBar from './componentes/navbar'
import FondoImage from './public/images/fondo7.jpg'
import Image from 'next/image'

export default function Home () {
  return (
    <div>
      <NavBar />
      <Image
        className='static'
        src={FondoImage}
        width={1920}
        height={1920}
        alt='Picture of the author'
      />
    </div>
  )
}
