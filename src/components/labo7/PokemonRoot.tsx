import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ThemeContext from "../../styles/ThemeContext";

export const PokemonRoot = () => {
  const styles = useContext(ThemeContext)
  return (
    <div>
      <div style={styles.nav}>
        <NavLink style={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="">Home</NavLink>
        <NavLink style={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink} to="pokemon">Pokémon</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div style={styles.footer}>
        Footer
      </div>
    </div>
  );
}

