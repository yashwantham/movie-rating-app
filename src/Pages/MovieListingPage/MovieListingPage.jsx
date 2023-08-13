import { useContext } from "react";

import "./MovieListingPage.css";
import { DataContext } from "../../Contexts/DataProvider";
import { MovieCard } from "./MovieCard";

export function MovieListingPage() {

    const { dataState, dispatchData } = useContext(DataContext);

    // console.log(dataState);

    const genreList = dataState.moviesList.reduce((allGenreArray, { genre }) => {
        for (let i = 0; i < genre.length; i++) {
            !(allGenreArray.includes(genre[i])) && allGenreArray.push(genre[i])
        }
        return allGenreArray;
    }, [])
    console.log(genreList);

    const yearList = [];
    for (let year = 1990; year <= 2023; year++) {
        yearList.push(year);
    }
    console.log(yearList);

    const displayMoviesList = [...dataState.moviesList]

    return (
        <>
            <div className="movielistingpage-container">
                <div className="filters-container">
                    <div className="moviesheading">
                        Movies
                    </div>

                    <div className="genrefilter">
                        <select name="genrefilter" id="">
                            <option value="all-genre">All Genre</option>
                            {genreList?.map((ele, ind) => (
                                <option value={ele} key={ind}>{ele}</option>
                            ))}
                        </select>
                    </div>

                    <div className="releaseyearfilter">
                        <select name="releaseyearfilter" id="">
                        <option value="release-year">Release Year</option>
                            {yearList?.map((ele,ind) => (
                                <option value={ele} key={ind}>{ele}</option>
                            ))}
                        </select>
                    </div>

                    <div className="ratingsfilter">
                        <select name="ratingsfilter" id="">
                            <option value="rating">Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div className="addmoviebtn">
                        Add Movie
                    </div>

                </div>

                <div className="movielist-container">
                    {displayMoviesList.map((movie) => (
                        <div className="cardcontainer" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}