import React from "react"
import { useEffect, useState } from "react"

interface Joke {
    id: string,
    joke: string,
    status: number
}  

export const DadJoke = () => {
    const [joke,setJoke] = useState(localStorage.getItem("favorite") ?? "")
  
    const loadJoke = async() => {
    
      let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          "Accept": "application/json"
        }
      })
      let json: Joke = await response.json()
      setJoke(json.joke)
    }
  
    const setFavorite = () => {
      localStorage.setItem("favorite",joke)
    }
  
    useEffect(()=>{
      if(joke==="") loadJoke()
    },[])
  
    return(
      <React.Fragment>
        <div style={{fontWeight:"bold"}}>Random joke:</div>
        <div>
          {joke}
        </div>
        <button onClick={()=>setFavorite()}>Set as favorite</button>
        <button onClick={()=>loadJoke()}>New Joke</button>
      </React.Fragment>
    )
  }