import { useRef } from "react"

const BookReader = () => {
    const currentPageRef = useRef<number>(1)

    const nextPage = () => {
        currentPageRef.current += 1;
        console.log(`Avanzaste a la pagina ${currentPageRef.current}`)
    }
    const previousPage = () => {
        if (currentPageRef.current ===  1) {
            console.log(`No se puede retroceder porque ya estas en la pagina ${currentPageRef.current}`)
            return;
        }
        currentPageRef.current -= 1;
        console.log(`Retrocediste a la pagina ${currentPageRef.current}`)
    }
    const goToPage = (page: number) => {
      if(page < 1) {
        console.log('No se puede saltar a esa pagina')
        return
      }
      currentPageRef.current = page;
      console.log(`Saltaste a la pagina ${currentPageRef.current}`)

  }
}


