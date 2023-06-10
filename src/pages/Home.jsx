import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import './MovieGrid.css';
import './Loading.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const GetToRateMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`;
        GetToRateMovies(topRateUrl)

    }, [])

    return (
        <div className="container">
            <h2 className="title">Os Melhores Filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && 
                    <div id='loading'>
                        <span id="spinner"></span>
                    </div>
                }
                {topMovies.length > 0 && 
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    )
}

export default Home