import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
    return (
      <div className="container">
        <div className="head">Header</div>
        <div className="nav">
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="/" >Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="labos">Labos</NavLink>
          <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "navLink"} to="contact">Contact</NavLink>
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