import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

const CAT_IMG_URL = 'https://cataas.com'

export function App () {
  const { fact, getFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    getFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}> Get new Fact </button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_IMG_URL}${imageUrl}`} alt='cat' />}
    </main>
  )
}
