import { Link, Outlet } from "react-router-dom"

const Labo6Root = () => {
    return (
        <div className="container">
          <div className="nav">
            <Link to="quizapp" >Quiz App</Link>
            <Link to="todo">To do list</Link>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      );
}

export default Labo6Root