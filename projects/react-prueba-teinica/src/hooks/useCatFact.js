import { useState, useEffect } from 'react'
import { getRandomFact } from '../service/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const getFact = () => {
    getRandomFact().then(setFact)
  }

  useEffect(getFact, [])

  return { fact, getFact }
}
