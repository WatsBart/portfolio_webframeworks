import { Outlet, NavLink } from "react-router-dom";
import "./styles/Styles.css" 

export const PokemonRoot = () => {
  return (
    <div className="container">
      <div className="head">Header</div>
      <div className="nav">
        <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="" >Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="pokemon">Pokémon</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

