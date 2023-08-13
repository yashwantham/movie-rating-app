import { createContext, useReducer } from "react"
import { movies } from "../Db/movies"; 

export const DataContext = createContext();

export function DataProvider({children}) {

    const dataReducer = () => {}

    const initialState = {moviesList: localStorage.getItem("movieList") ? JSON.parse(localStorage.getItem("movieList")) : movies}

    const [dataState, dispatchData] = useReducer(dataReducer, initialState)

    return (
        <>
        <DataContext.Provider value={{dataState, dispatchData}}>{children}</DataContext.Provider>
        </>
    )
}