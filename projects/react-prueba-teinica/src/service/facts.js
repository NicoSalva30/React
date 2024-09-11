const FACT_CAT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(FACT_CAT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
