import React, { useEffect, useState } from "react"

export const Timer = () => {
    const [numberOfSeconds, setNumberOfSeconds] = useState(0)
    const [time, setTime] = useState<Date>(new Date())
  
    useEffect(() => {
      let handle = setInterval(() => {
        setNumberOfSeconds(number => number + 1)
        let currDate = new Date()
        setTime(currDate)
      }, 1000)
  
      return () => {
        clearInterval(handle)
      }
    },[])
  
    return(
      <React.Fragment>
        <p>The application has been opened for {numberOfSeconds} second{numberOfSeconds == 1 ? "" : "s"}</p>
        <p>Current time: {time.toLocaleTimeString()}</p>
      </React.Fragment>
    )
  }