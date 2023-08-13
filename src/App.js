import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopNavBar } from "./Components/TopNavbar/TopNavBar";
import { MovieListingPage } from "./Pages/MovieListingPage/MovieListingPage";
import { WatchListPage } from "./Pages/WatchListPage/WatchListPage";
import { StarredPage } from "./Pages/StarredPage/StarredPage";
import { AddNewMovie } from "./Pages/AddNewMovie/AddNewMovie";
import { MovieDetailPage } from "./Pages/MovieDetailPage/MovieDetailPage";

function App() {
  return (
    <>
      <div className="App">

        <TopNavBar />

        <Routes>
          <Route path="/" element={<MovieListingPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/starred" element={<StarredPage />} />
          <Route path="/addnewmovie" element={<AddNewMovie />} />
          <Route path="/moviedetail/:movieID" element={<MovieDetailPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
