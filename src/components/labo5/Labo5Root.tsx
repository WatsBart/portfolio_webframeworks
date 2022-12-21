import { Link, Outlet } from "react-router-dom"

const Labo5Root = () => {
    return (
        <div className="container">
          <div className="nav">
            <Link to="interval">Interval</Link>
            <Link to="localstorage">Local storage</Link>
            <Link to="pokemon">Pokemon</Link>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      );
}

export default Labo5Root