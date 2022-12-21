import { Link, Outlet } from "react-router-dom"

const Labo4Root = () => {
    return (
        <div className="container">
          <div className="nav">
            <Link to="colorselect">Color Select</Link>
            <Link to="counterlist">Counter List</Link>
            <Link to="filtering">Filtering</Link>
            <Link to="shoppinglist">Shopping List</Link>
            <Link to="slotmachine">Slot Machine</Link>
            <Link to="tictactoe">Tic Tac Toe</Link>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      );
}

export default Labo4Root