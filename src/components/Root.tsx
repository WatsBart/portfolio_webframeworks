import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ThemeContext from "../styles/ThemeContext";

interface dogApi {
  message: string,
  status: string
}

export const Root = () => {
  const [src, setSrc] = useState("")
  useEffect(()=>{
    const getDog = async() => {
      let result = await fetch("https://dog.ceo/api/breeds/image/random")
      let json = await result.json()
      setSrc(json.message)
    }
    getDog()
  },[])
  const styles = useContext(ThemeContext)
  return (
    <div className="container">
      <div className="dog">
        <img src={src} />
      </div>
      <div className="head">Web Frameworks</div>
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
        <p className="copyright">&copy; Bart Wats</p>
      </div>
    </div>
  );
}