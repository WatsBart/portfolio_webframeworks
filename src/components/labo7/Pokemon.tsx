import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeContext } from "../../App";
import ThemeContext from "../../styles/ThemeContext";

export const Pokemon = () => {
    const results = useContext(PokeContext).results;
    const styles = useContext(ThemeContext)
    return (
      <ul>
        {results.map((pokemon) => {
          let list = pokemon.url.split('/');
          let url = "" + list[list.length-2];
          return(
            <div> 
              <Link to={url} style={styles.links}>{pokemon.name}</Link>
            </div>
          );
        })}
      </ul>
    );
}