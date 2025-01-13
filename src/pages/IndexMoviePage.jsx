import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]); // State per il salvataggio dei film

  useEffect(() => {
    // Fetch all'API Express
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return(

<div className="container">
    <h1>lista post </h1>

    <ul>
    {movies.map((movie)=>(
        <li key={movie.id}>
            {movie.title}
        </li>
    ))}
    </ul>
    
    </div>
    
  )
}
    

























