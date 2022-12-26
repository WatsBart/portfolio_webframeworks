import { useContext, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"
import ThemeContext from "../../styles/ThemeContext"

const Labo4Root = () => {
  let { fromSearch } = useParams()
  const [selected, setSelected] = useState(fromSearch === "search")
  const styles = useContext(ThemeContext)
  return (
    <div className="container">
      <div style={styles.nav}>
        <Link style={styles.links} to="colorselect" onClick={() => setSelected(true)}>Color Select</Link>
        <Link style={styles.links} to="counterlist" onClick={() => setSelected(true)}>Counter List</Link>
        <Link style={styles.links} to="filtering" onClick={() => setSelected(true)}>Filtering</Link>
        <Link style={styles.links} to="shoppinglist" onClick={() => setSelected(true)}>Shopping List</Link>
        <Link style={styles.links} to="slotmachine" onClick={() => setSelected(true)}>Slot Machine</Link>
        <Link style={styles.links} to="tictactoe" onClick={() => setSelected(true)}>Tic Tac Toe</Link>
      </div>
      <div className="content">
        {selected ? <div /> :
          <div>
            <fieldset>
              <legend>Color Select</legend>
              <p>An application that shows a list of colors. The user can select a color and press a button after which a part of the screen will turn into that color.</p>
              <Link style={styles.links} to="colorselect" onClick={() => setSelected(true)}>Go</Link>
            </fieldset>
            <fieldset>
              <legend>Counter List</legend>
              <p>An application that lets the user add counters that they can increment up or down. The application will also show the sum of all the counters at the bottom.</p>
              <Link style={styles.links} to="counterlist" onClick={() => setSelected(true)}>Go</Link>
            </fieldset>
            <fieldset>
              <legend>Filtering</legend>
              <p>An application that will show a list of preset names. The user can sort the list by Name, Age or Year by clicking on the word. The user can also filter the names on a given input.</p>
              <Link style={styles.links} to="filtering" onClick={() => setSelected(true)}>Go</Link>
            </fieldset>
            <fieldset>
              <legend>Shopping List</legend>
              <p>An application where the user can make a shopping list by writing a name of a product and the amount they need. A name is required and the quantity cannot be less than 1. If these conditions are met the item will appear in the list, if not an error message will show.</p>
              <Link style={styles.links} to="shoppinglist" onClick={() => setSelected(true)}>Go</Link>
            </fieldset>
            <fieldset>
              <legend>Slot Machine</legend>
              <p>An application that will show a slot machine. The application show all possible icons, the amount of money the user has and a message whether or not the user has won. If the three symbols in the slotmachine are the same the user wins €20. It costs €1 to activate the slot machine. If the user cannot afford the slotmachine the button will be disabled.</p>
              <Link style={styles.links} to="slotmachine" onClick={() => setSelected(true)}>Go</Link>
            </fieldset>
            <fieldset>
              <legend>Tic Tac Toe</legend>
              <p>A simple tic tac toe game. If the user clicks a square it will be filled with the symbol corresponding to the current turn. If there is a winner it will be displayed below the field and the field will become inactive.</p>
              <Link style={styles.links} to="tictactoe" onClick={() => setSelected(true)}>Go</Link>
            </fieldset>
          </div>
        }
        <Outlet />
      </div>
    </div>
  );
}

export default Labo4Root