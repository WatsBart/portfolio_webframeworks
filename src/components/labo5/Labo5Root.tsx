import { useContext, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import ThemeContext from "../../styles/ThemeContext";

const Labo5Root = () => {
  let { fromSearch } = useParams()
  const [selected,setSelected] = useState(fromSearch === "search")
  const styles = useContext(ThemeContext)
    return (
        <div className="container">
          <div className="nav">
            <Link style={styles.links} to="interval" onClick={()=>setSelected(true)}>Interval</Link>
            <Link style={styles.links} to="localstorage" onClick={()=>setSelected(true)}>Local storage</Link>
            <Link style={styles.links} to="pokemon" onClick={()=>setSelected(true)}>Pokemon</Link>
          </div>
          <div className="content">
          {selected ? <div /> :
            <div>
              <fieldset>
                <legend>Interval</legend>
                <p>An application that will do a few things every pre set interval. Actions include giving the current time, how long the application has been opened and giving two random values.</p>
                <Link style={styles.links} to="interval" onClick={()=>setSelected(true)}>Go</Link>
              </fieldset>
              <fieldset>
                <legend>Local storage</legend>
                <p>An application that will do an API call to get a dad joke. The application can save the currently displayed joke so that it will be displayed again when the application is reopened.</p>
                <Link style={styles.links} to="localstorage" onClick={()=>setSelected(true)}>Go</Link>
              </fieldset>
              <fieldset>
                <legend>Pokémon</legend>
                <p>An application that shows a list of pokemon names. The user can choose the amount of pokemon as well as filter their names on a given input.</p>
                <Link style={styles.links} to="pokemon" onClick={()=>setSelected(true)}>Go</Link>
              </fieldset>
            </div>
            }
            <Outlet />
          </div>
        </div>
      );
}

export default Labo5Root