import { useState } from "react";
import { Link } from "react-router-dom";

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
  return (
    <div>
        <div className="search">
            <input type="text" value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)}></input>
            <Link to={"/search/" + searchQuery}><button>Search</button></Link>
        </div>
        <div className="searchExplanation">
            <p>Search for specific components here by typing the name in the input bar and clicking the search button.</p>
        </div>

    </div>
  );
}