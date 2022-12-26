import { useContext, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom"
import ThemeContext from "../../styles/ThemeContext";

const Labo6Root = () => {
  let { fromSearch } = useParams()
  const styles = useContext(ThemeContext)
  const [selected, setSelected] = useState(fromSearch === "search")
    return (
        <div className="container">
          <div className="nav">
            <Link style={styles.links} to="quizapp" onClick={()=>setSelected(true)}>Quiz App</Link>
            <Link style={styles.links} to="todo" onClick={()=>setSelected(true)}>To do list</Link>
          </div>
          <div className="content">
            {selected ? <div /> :
            <div>
              <fieldset>
                <legend>Quiz App</legend>
                <p>An application that shows a few questions. The user can answer them and will then be told the answer along with if they were right or wrong. The user can also ask for more questions.</p>
                <Link style={styles.links} to="quizapp" onClick={()=>setSelected(true)}>Go</Link>
              </fieldset>
              <fieldset>
                <legend>To Do List</legend>
                <p>An application where the user can make a to-do list. The user can cross off any item when they are done.</p>
                <Link style={styles.links} to="todo" onClick={()=>setSelected(true)}>Go</Link>
              </fieldset>
            </div>
            }
            <Outlet />
          </div>
        </div>
      );
}

export default Labo6Root