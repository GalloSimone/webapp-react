import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexMoviePage() {
  const [movies, setMovies] = useState([]); 
  useEffect(() => {
   
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return(
   <>
<div className="container">
    <h1>lista post </h1>
    
    <ul>
    {movies.map((movie)=>(
        <li key={movie.id}>
            {movie.title}
           
            <p>{movie.genre}</p>

            <p>{movie.director}</p>
        </li>
        
        
    ))}
    </ul>
    
    </div>
   
    </>  
  )
}
    

























