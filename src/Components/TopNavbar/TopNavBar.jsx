import { NavLink, useNavigate } from "react-router-dom";
import "./TopNavBar.css";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider";

export function TopNavBar() {

    const navigate = useNavigate();

    const { dataState, dispatchData } = useContext(DataContext)

    return (
        <>
        <div className="topnavbar-container">
            <div className="appheading" onClick={() => navigate("/")}>
                IMDB
            </div>
            <div className="searchbar-container">
                <input type="text" className="search-input" placeholder="Search movie by title, cast and director" onChange={(e) => dispatchData({type: "set_searchedTerm", payload: e.target.value.trim()})}/>
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