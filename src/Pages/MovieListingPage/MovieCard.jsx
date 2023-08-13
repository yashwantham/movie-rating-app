import { useContext } from "react";
import "./MovieCard.css";
import { DataContext } from "../../Contexts/DataProvider";

export function MovieCard({ movie }) {

    const { dataState, dispatchData } = useContext(DataContext);
    // set_watchList set_starredMovies
    const starHandle = () => {
        const newStarredList = [...dataState.starredMovies, movie]
        dispatchData({ type: "set_starredMovies", payload: newStarredList })
        localStorage.setItem("starredMovies", JSON.stringify(newStarredList));
    }

    const addToWatchlistHandle = () => {
        const newAddtowatchlist = [...dataState.watchList, movie]
        dispatchData({ type: "set_watchList", payload: newAddtowatchlist })
        localStorage.setItem("watchList", JSON.stringify(newAddtowatchlist))
    }

    const unstarHandle = () => {
        const newStarredList = dataState.starredMovies.filter(({ id }) => id != movie.id)
        dispatchData({ type: "set_starredMovies", payload: newStarredList })
        localStorage.setItem("starredMovies", JSON.stringify(newStarredList));
    }

    const removeFromWatchlistHandle = () => {
        const newAddtowatchlist = dataState.watchList.filter(({ id }) => id != movie.id)
        dispatchData({ type: "set_watchList", payload: newAddtowatchlist })
        localStorage.setItem("watchList", JSON.stringify(newAddtowatchlist))
    }

    const isStarred = (inId) => dataState.starredMovies.find(({ id }) => id == inId) ? true : false

    const isWatchlisted = (inId) => dataState.watchList.find(({ id }) => id == inId) ? true : false

    return (
        <>
            <div className="moviecard-container">
                <div className="moviecardimg-container">
                    <img src={movie.imageURL} alt="" className="moviecardimg" />
                </div>
                <div className="movie-content-n-btns">
                    <div className="moviecard-title contentd">
                        {movie.title}
                    </div>
                    <div className="moviecard-summary contentd">
                        {movie.summary.length > 120 ? `${movie.summary.substring(0, 120)}...` : movie.summary}
                    </div>
                    <div className="moviecard-btns-container contentd">
                        {isStarred(movie.id) ? (
                            <div className="star-btn" onClick={unstarHandle}>
                                Starred
                            </div>
                        ) : (
                            <div className="star-btn" onClick={starHandle}>
                                Star
                            </div>
                        )}

                        {isWatchlisted(movie.id) ? (
                            <div className="addtowatchlist-btn" onClick={removeFromWatchlistHandle}>
                            Added to Watchlist
                            </div>
                        ): (
                            <div className = "addtowatchlist-btn" onClick = { addToWatchlistHandle }>
                            Add to Watchlist
                            </div>
                    )
                        }
                </div>
            </div>
        </div >
        </>
    )
}