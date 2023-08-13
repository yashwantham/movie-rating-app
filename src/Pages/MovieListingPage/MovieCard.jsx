import "./MovieCard.css";

export function MovieCard({ movie }) {
    return (
        <>
            <div className="moviecard-container">
                <div className="moviecardimg-container">
                    <img src={movie.imageURL} alt="" className="moviecardimg" />
                </div>
                <div className="movie-content-n-btns">
                    <div className="moviecard-title contentd">
                        {movie.title}
                    </div>
                    <div className="moviecard-summary contentd">
                        {movie.summary.length > 120 ? `${movie.summary.substring(0, 120)}...` : movie.summary}
                    </div>
                    <div className="moviecard-btns-container contentd">
                        <div className="star-btn">
                            Star
                        </div>
                        <div className="addtowatchlist-btn">
                            Add to Watchlist
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}