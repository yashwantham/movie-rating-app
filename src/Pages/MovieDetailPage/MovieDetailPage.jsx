import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider";

export function MovieDetailPage() {

    const { movieID } = useParams();

    const { dataState, dispatchData } = useContext(DataContext);

    const selectedMovie = dataState.moviesList.find(({ id }) => id == movieID)

    const starHandle = () => {
        const newStarredList = [...dataState.starredMovies, selectedMovie]
        dispatchData({ type: "set_starredMovies", payload: newStarredList })
        localStorage.setItem("starredMovies", JSON.stringify(newStarredList));
    }

    const addToWatchlistHandle = () => {
        const newAddtowatchlist = [...dataState.watchList, selectedMovie]
        dispatchData({ type: "set_watchList", payload: newAddtowatchlist })
        localStorage.setItem("watchList", JSON.stringify(newAddtowatchlist))
    }

    const unstarHandle = () => {
        const newStarredList = dataState.starredMovies.filter(({ id }) => id != selectedMovie.id)
        dispatchData({ type: "set_starredMovies", payload: newStarredList })
        localStorage.setItem("starredMovies", JSON.stringify(newStarredList));
    }

    const removeFromWatchlistHandle = () => {
        const newAddtowatchlist = dataState.watchList.filter(({ id }) => id != selectedMovie.id)
        dispatchData({ type: "set_watchList", payload: newAddtowatchlist })
        localStorage.setItem("watchList", JSON.stringify(newAddtowatchlist))
    }

    const isStarred = (inId) => dataState.starredMovies.find(({ id }) => id == inId) ? true : false

    const isWatchlisted = (inId) => dataState.watchList.find(({ id }) => id == inId) ? true : false

    return (
        <>
            <div className="moviedetailpage-container">
                <div className="moviedetail-card">
                    <div className="imgcontainer-dp">
                        <img src={selectedMovie?.imageURL} alt="" className="img-dp" />
                    </div>
                    <div className="moviecontent-dp">
                        <div className="movietitle-dp mr-tb">
                            {selectedMovie?.title}
                        </div>
                        <div className="summary-dp mr-tb">
                            {selectedMovie?.summary}
                        </div>
                        <div className="year-dp mr-tb">
                            Year: {selectedMovie?.year}
                        </div>
                        <div className="genre-dp mr-tb">
                            Genre: {selectedMovie?.genre.join(', ')}
                        </div>
                        <div className="rating-dp mr-tb">
                            Rating: {selectedMovie?.rating}
                        </div>
                        <div className="director-dp mr-tb">
                            Director: {selectedMovie?.director}
                        </div>
                        <div className="writer-dp mr-tb">
                            Director: {selectedMovie?.writer}
                        </div>
                        <div className="cast-dp mr-tb">
                            Genre: {selectedMovie?.cast.join(', ')}
                        </div>

                        <div className="moviecard-btns-container contentd mr-tb btns-dp">
                            {isStarred(selectedMovie?.id) ? (
                                <div className="star-btn" onClick={unstarHandle}>
                                    Starred
                                </div>
                            ) : (
                                <div className="star-btn" onClick={starHandle}>
                                    Star
                                </div>
                            )}

                            {isWatchlisted(selectedMovie?.id) ? (
                                <div className="addtowatchlist-btn" onClick={removeFromWatchlistHandle}>
                                    Added to Watchlist
                                </div>
                            ) : (
                                <div className="addtowatchlist-btn" onClick={addToWatchlistHandle}>
                                    Add to Watchlist
                                </div>
                            )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}