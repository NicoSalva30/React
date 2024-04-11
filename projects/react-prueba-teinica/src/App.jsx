import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './service/facts.js'

const CAT_IMG_URL = 'https://cataas.com'
// const FIRST_CAT = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        console.log(response)
        setImageUrl(url)
      })
  }, [fact])

  const handleClick = () => {
    getRandomFact()
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
