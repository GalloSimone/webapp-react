import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';



export default function DetailMoviePage(){
    const {id: movieId} = useParams();
const[movie, setMovie] =useState();

useEffect(() => {
  
    fetch("http://localhost:3000/movies/"+movieId)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);
    return(
        <>
        <div className="container">
        <h1>dettaglio film </h1>

         {movie && <p>{movie.title}</p>}
        </div>
        </>
    )
}