import {v4 as uuid} from "uuid";

import "./AddNewMovie.css";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataProvider";

export function AddNewMovie() {


    const { dataState, dispatchData } = useContext(DataContext)
    

      const submitHandle = (e) => {
        const newMovie = {
            id: uuid(),
            title: e.target.title.value,
            year: e.target.year.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            director: e.target.director.value,
            writer: e.target.writer.value,
            cast: e.target.cast.value,
            summary: e.target.summary.value,
            imageURL: e.target.imageURL.value,
          }

          const newMovieList = [...dataState.moviesList, newMovie]
          dispatchData({type: "set_moviesList", payload: newMovieList})
          localStorage.setItem("moviesList", JSON.stringify(newMovieList))
          
      }

    return (
        <>
        <div className="addnewmoviepage-container">
            <form action="" onSubmit={(e) => submitHandle(e)}>
                <div><span>Title: </span><input type="text" id="title" required/></div>
                <div><span>Year: </span><input type="number" id="year" required/></div>
                <div><span>Genre: </span><input type="text" id="genre" required/></div>
                <div><span>Rating: </span><input type="text" id="rating" required/></div>
                <div><span>Director: </span><input type="text" id="director" required/></div>
                <div><span>Writer: </span><input type="text" id="writer" required/></div>
                <div><span>Cast: </span><input type="text" id="cast" required/></div>
                <div><span>Summary: </span><input type="text" id="summary" required/></div>
                <div><span>Image URL: </span><input type="text" id="imageURL" required/></div>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}