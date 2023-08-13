import { useContext } from "react";

import "./MovieListingPage.css";
import { DataContext } from "../../Contexts/DataProvider";
import { MovieCard } from "./MovieCard";
import { useNavigate } from "react-router-dom";

export function MovieListingPage() {

    const navigate = useNavigate();

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

    /* genreFilterSelected: "all-genre", releaseYearFilterSelected: "release-year", ratingFilterSelected: "rating" */
    let displayMoviesList = [...dataState.moviesList]

    const genreFilterHandler = (e) => dispatchData({type: "set_genreFilterSelected", payload: e.target.value})
    const releaseYearFilterHandler = (e) => dispatchData({type: "set_releaseYearFilterSelected", payload: e.target.value})
    const ratingsFilterHandler = (e) => dispatchData({type: "set_ratingFilterSelected", payload: e.target.value})
    
    if(dataState.genreFilterSelected === "all-genre" || dataState.releaseYearFilterSelected === "release-year" || dataState.ratingFilterSelected === "rating") {
        displayMoviesList = [...dataState.moviesList]
    }

    if(dataState.genreFilterSelected !== "all-genre") {
        displayMoviesList = displayMoviesList.filter(({genre}) => genre.includes(dataState.genreFilterSelected))
    }

    if(dataState.releaseYearFilterSelected !== "release-year") {
        displayMoviesList = displayMoviesList.filter(({year}) => year == dataState.releaseYearFilterSelected)
    }

    if(dataState.ratingFilterSelected !== "rating") {
        displayMoviesList = displayMoviesList.filter(({rating}) => rating == dataState.ratingFilterSelected)
    }


    displayMoviesList = displayMoviesList.filter(({title, cast, director}) => (
        title.toLowerCase().includes(dataState.searchedTerm.toLowerCase()) || director.toLowerCase().includes(dataState.searchedTerm.toLowerCase()) || cast.some((item) => item.toLowerCase().includes(dataState.searchedTerm.toLowerCase()))
    ) )


    return (
        <>
            <div className="movielistingpage-container">
                <div className="filters-container">
                    <div className="moviesheading">
                        Movies
                    </div>
                    
                    <div className="genrefilter">
                        <select name="genrefilter" id="" value={dataState.genreFilterSelected} onChange={(e) => genreFilterHandler(e)}>
                            <option value="all-genre">All Genre</option>
                            {genreList?.map((ele, ind) => (
                                <option value={ele} key={ind}>{ele}</option>
                            ))}
                        </select>
                    </div>

                    <div className="releaseyearfilter">
                        <select name="releaseyearfilter" id="" value={dataState.releaseYearFilterSelected} onChange={(e) => releaseYearFilterHandler(e)}>
                        <option value="release-year">Release Year</option>
                            {yearList?.map((ele,ind) => (
                                <option value={ele} key={ind}>{ele}</option>
                            ))}
                        </select>
                    </div>

                    <div className="ratingsfilter">
                        <select name="ratingsfilter" id="" value={dataState.ratingFilterSelected} onChange={(e) => ratingsFilterHandler(e)}>
                            <option value="rating">Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                    </div>

                    <div className="addmoviebtn" onClick={() => navigate("/addnewmovie")}>
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