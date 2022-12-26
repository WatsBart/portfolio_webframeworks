import { useContext } from "react";
import { Link } from "react-router-dom"
import ThemeContext from "../styles/ThemeContext";

interface LabosProps {
  labos: string[]
}

export const Labos = ({ labos }: LabosProps) => {
  const styles = useContext(ThemeContext)
  return (
    <ul>
      {labos.map((labo) => {
        let url = "/" + labo
        return (
          <div>
            <Link to={url} style={styles.links}>{labo}</Link>
          </div>
        );
      })}
    </ul>
  );
}