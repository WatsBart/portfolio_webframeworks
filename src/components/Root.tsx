import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ThemeContext from "../styles/ThemeContext";

export const Root = () => {
  const styles = useContext(ThemeContext)
  return (
      <div className="container">
        <div className="head">Header</div>
        <div className="nav">
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="/" >Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="search" >Search</NavLink>
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="labos">Labos</NavLink>
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="contact">Contact</NavLink>
        </div>
        <div className="content" style={styles.content}>
          <Outlet />
        </div>
        <div className="footer">
        Footer
      </div>
      </div>

  );
}