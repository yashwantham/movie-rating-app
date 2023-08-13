import { useContext } from "react";
import "./StarredPage.css";
import { DataContext } from "../../Contexts/DataProvider";
import { MovieCard } from "../MovieListingPage/MovieCard";

export function StarredPage() {

    const { dataState } = useContext(DataContext);

    console.log("dataState.starredMovies",dataState.starredMovies);

    return (
        <>
            <div className="starredpage-container">
                <div className="movielist-container">
                    {dataState?.starredMovies?.map((movie) => (
                        <div className="cardcontainer" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}