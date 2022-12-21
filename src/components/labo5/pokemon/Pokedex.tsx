import React, { useEffect, useState } from "react"
import { LoadingIndicator } from "./LoadingIndicator"

interface data {
    results: pokeInfo[]
  }
  
  interface pokeInfo {
    name:string,
    url:string
  }
  

interface PokedexProps{
    limit?: number
  }

export const Pokedex = ({limit=151}:PokedexProps) => {
    const [pokemon,setPokemon] = useState<pokeInfo[]>([])
    const [loading, setLoading] = useState(false)
    const [filterText, setFilterText] = useState("")
    
    useEffect(()=> {
      const getData = async(limit:number) => {
        setLoading(true)
        let link = "https://pokeapi.co/api/v2/pokemon?limit="+limit;
        let result = await fetch(link)
        let json: data = await result.json()
        setPokemon(json.results)
        setLoading(false)
      }
      
      getData(limit)
    },[limit])
    
    return (
      <React.Fragment>
        <div>
          
          <input type="text" value={filterText} onChange={(event)=>setFilterText(event.target.value)}></input><br/>
          {
            loading ? <LoadingIndicator/> : 
            <ul>
            {
              pokemon.filter((pokemon)=>pokemon.name.toUpperCase().startsWith(filterText.toUpperCase())).map((pokemon)=>{
                return <li key={pokemon.name}>{pokemon.name}</li>
              })
            }
            </ul>
          }
          
        </div>
        
      </React.Fragment>
    );
  }