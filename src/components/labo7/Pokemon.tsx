import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeContext } from "../../App";

export const Pokemon = () => {
    const results = useContext(PokeContext).results;
    return (
      <ul>
        {results.map((pokemon) => {
          let list = pokemon.url.split('/');
          let url = "" + list[list.length-2];
          return(
            <div> 
              <Link to={url}>{pokemon.name}</Link>
            </div>
          );
        })}
      </ul>
    );
}