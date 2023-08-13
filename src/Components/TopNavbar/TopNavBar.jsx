import { NavLink, useNavigate } from "react-router-dom";
import "./TopNavBar.css";

export function TopNavBar() {

    const navigate = useNavigate();

    return (
        <>
        <div className="topnavbar-container">
            <div className="appheading" onClick={() => navigate("/")}>
                IMDB
            </div>
            <div className="searchbar-container">
                <input type="text" className="search-input" placeholder="Search movie by title, cast and director"/>
            </div>
            <div className="navigators-container">
                <div className="navigator-container">
                    <NavLink to="/" className="navigator">Movies</NavLink>
                </div>
                <div className="navigator-container">
                    <NavLink to="/watchlist" className="navigator">Watch List</NavLink>
                </div>
                <div className="navigator-container">
                    <NavLink to="/starred" className="navigator">Starred Movies</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}