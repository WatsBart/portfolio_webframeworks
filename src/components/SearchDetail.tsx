import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { component } from "../App";
import ThemeContext from "../styles/ThemeContext";
import { Search } from "./Search";

interface SearchProps {
  components: component[]
}

export const SearchDetail = ({ components}: SearchProps) => {
    const styles = useContext(ThemeContext)
    let { query } = useParams();
    if(query === undefined) query=""
    return (
    <div>
        <Search></Search>
        {components.filter((component)=>component.name.toLowerCase().includes(query!.toLowerCase())).sort((a,b)=>{
            if(a.name.toLowerCase().indexOf(query!.toLowerCase()) > b.name.toLowerCase().indexOf(query!.toLowerCase())) return 1
            return 0
        })
        .map((component)=>(
            <div>
                <Link to={'/'+component.link.split('/')[1]+"/search/"+component.link.split('/')[2]} style={styles.links}>{component.name}</Link><br />
            </div>
        ))}
    </div>
  );
}