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

  return (
    <>
      <div className="container px-5 m-5">
        <h1 className="text-center p-3">I FILM</h1>
        <div className="row">
          {movies.map((movie) => (
            <div className="col-md-4 col-sm-6 col-12 mb-4" key={movie.id}>
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{movie.director}</h6>
                  <p className="card-text">Genere: {movie.genre}</p>
                  <p className="card-text">Anno di pubblicazione: {movie.release_year}</p>
                  <Link to={'/movies/' + movie.id}><button>vedi dettagli</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}























