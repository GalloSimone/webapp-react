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
      <h1>dettaglio film</h1>
      {movie && <p>{movie.title}</p>}
      {reviews.length > 0 ? (
        reviews.map((review, index) => <p key={index}>{review.vote}</p>)
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}