import { Link } from "react-router-dom"

interface LabosProps {
    labos: string[]
}

export const Labos = ({labos}:LabosProps) => {
    return (
        <ul>
          {labos.map((labo) => {
            let url = "/"+labo
            return(
              <div> 
                <Link to={url}>{labo}</Link>
              </div>
            );
          })}
        </ul>
      );
}