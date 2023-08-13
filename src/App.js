import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopNavBar } from "./Components/TopNavbar/TopNavBar";
import { MovieListingPage } from "./Pages/MovieListingPage/MovieListingPage";
import { WatchListPage } from "./Pages/WatchListPage/WatchListPage";
import { StarredPage } from "./Pages/StarredPage/StarredPage";

function App() {
  return (
    <>
      <div className="App">

        <TopNavBar />

        <Routes>
          <Route path="/" element={<MovieListingPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/starred" element={<StarredPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
