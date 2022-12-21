import { useEffect, useState } from "react"

interface RandomValueProps {
    min: number,
    max: number
  }
  
  export const RandomValue = ({min,max}:RandomValueProps) => {
    const [randomNumber, setRandomNumber] = useState(Math.round((Math.random()*(max-min))+min))
  
    useEffect(() => {
      let handle = setInterval(() => {
        setRandomNumber(Math.round((Math.random()*(max-min))+min))
      }, 1000)
  
      return () => {
        clearInterval(handle)
      }
    },[])
  
    return(
      <p>Random value between {min} and {max}: {randomNumber}</p>
    )
  }
  