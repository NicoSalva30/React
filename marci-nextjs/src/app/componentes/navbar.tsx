import Link from 'next/link'

function NavBar () {
  return (
    <div className='fixed top-0 left-0 right-0 w-100 h-20 flex justify-around items-center opacity-75 bg-cyan-600'>
      <Link className='text-white hover:text-sky-400 font-serif duration-300 text-2xl ' href="/redes">Redes</Link>
      <Link className='text-black hover:text-sky-400 font-serif text-2xl ' href="/productos">Productos</Link>
      <Link className='text-black hover:text-sky-400 font-serif text-2xl ' href="/quien-somos">Quien somos</Link>
      <Link className='text-black hover:text-sky-400 font-serif text-2xl ' href="/recetas">Recetas</Link>
    </div>
  );
}

export default NavBar
