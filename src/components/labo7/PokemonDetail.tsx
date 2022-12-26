import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ThemeContext from "../../styles/ThemeContext";

interface PokemonData { 
    height: number,
    name: string,
    sprites: {
      back_default: string,
      back_female: string,
      back_shiny: string,
      back_shiny_female: string,
      front_default: string,
      front_female: string,
      front_shiny: string,
      front_shiny_female: string
    },
    weight: number
}

interface PokemonDetailProps {
  BackLink: string
}

export const PokemonDetail = ({BackLink}:PokemonDetailProps) => {
    const [pokemon, setPokemon] = useState<PokemonData>();
    const styles = useContext(ThemeContext)
    let { id } = useParams();
    let param = 0
    if(id !== undefined){
      param = parseInt(id);
    }
    let url = "https://pokeapi.co/api/v2/pokemon/"+param;
    useEffect(() => {
      const fetchFunction = async () => {
        let result = await fetch(url);
        let json = await result.json();
        setPokemon(json);
      }
      fetchFunction();
    }, []);
    
    return (
      <div>
        <p>Name: {pokemon?.name}</p>
        <p>Weight: {pokemon?.weight}</p>
        <p>Height: {pokemon?.height}</p>
        <div>
          <img src={pokemon?.sprites.front_default} />
        </div>
        <Link to={BackLink} style={styles.links}>Back</Link>
      </div>
    );
}