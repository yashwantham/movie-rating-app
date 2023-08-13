import { createContext, useReducer } from "react"
import { movies } from "../Db/movies"; 
import { act } from "react-dom/test-utils";

export const DataContext = createContext();

export function DataProvider({children}) {

    const dataReducer = (state, action) => {
        switch(action.type) {

            case "set_genreFilterSelected": {
                return {...state, genreFilterSelected: action.payload}
            }

            case "set_releaseYearFilterSelected": {
                return {...state, releaseYearFilterSelected: action.payload}
            }

            case "set_ratingFilterSelected": {
                return {...state, ratingFilterSelected: action.payload}
            }

            case "set_searchedTerm": {
                return {...state, searchedTerm: action.payload}
            }

            case "set_watchList": {
                return {...state, watchList: action.payload}
            }

            case "set_starredMovies": {
                return {...state, starredMovies: action.payload}
            }

            default: {
                return state
            }

        }
    }

    const initialState = {moviesList: localStorage.getItem("movieList") ? JSON.parse(localStorage.getItem("movieList")) : movies, genreFilterSelected: "all-genre", releaseYearFilterSelected: "release-year", ratingFilterSelected: "rating", searchedTerm: "", watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [], starredMovies: localStorage.getItem("starredMovies") ? JSON.parse(localStorage.getItem("starredMovies")) : []}

    // watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [], starredMovies: localStorage.getItem("starredMovies") ? JSON.parse(localStorage.getItem("starredMovies")) : []}

    const [dataState, dispatchData] = useReducer(dataReducer, initialState)

    return (
        <>
        <DataContext.Provider value={{dataState, dispatchData}}>{children}</DataContext.Provider>
        </>
    )
}