import { useContext } from "react";
import "./WatchListPage.css";
import { DataContext } from "../../Contexts/DataProvider";
import { MovieCard } from "../MovieListingPage/MovieCard";

export function WatchListPage() {

    const { dataState } = useContext(DataContext);

    return (
        <>
            <div className="watchlistpage-container">
            <div className="movielist-container">
                {dataState?.watchList?.map((movie) => (
                    <div className="cardcontainer" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}
