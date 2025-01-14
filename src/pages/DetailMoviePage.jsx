import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';



export default function DetailMoviePage(){
    const {id: movieId} = useParams();
const[movie, setMovie] =useState(null);
const [reviews, setReviews] =useState([]);

useEffect(() => {
  
    fetch("http://localhost:3000/movies/"+movieId)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setReviews(data.reviews)
      });
  }, []);
  return (
    <div className="container">
      {movie && 
      <h1>{movie.title}</h1>}
      {movie && 
       <p>regista:<strong>{movie.director}</strong></p>}
      {movie && 
       <p>genere: <strong>{movie.genre}</strong></p>}
      {movie && 
       <p>anno di pubblicazione: <strong>{movie.release_year}</strong></p>}

       <h2>Recensioni</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => 
        <p key={index}>
            <strong>{review.name}</strong>:{review.text}<br/>Rating:{review.vote}</p> )
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}