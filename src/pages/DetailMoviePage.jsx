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
    <div className="card m-5 p-3" style={{width: "18rem"}}>
  <div className="card-body">
    {movie && <h5 className="card-title">{movie.title}</h5>}
    {movie && <h6 className="card-subtitle mb-2 text-body-secondary">Regista: <strong>{movie.director}</strong></h6>}
    { movie && <p className="card-text"> Genere: <strong>{movie.genre}</strong></p>}
    {movie && <p  className="card-text">Anno di pubblicazione: <strong>{movie.release_year}</strong></p>}
    <h2>Recensioni</h2>
    {reviews.length > 0 ? (
        reviews.map((review, index) => 
        <p key={index}>
            <strong>{review.name}</strong>:{review.text}<br/>
            Rating:<strong>{review.vote}</strong></p> )
      ) : (
        <p>No reviews available</p>
      )}


  </div>
</div>





    

      /* <h2>Recensioni</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => 
        <p key={index}>
            <strong>{review.name}</strong>:{review.text}<br/>Rating:{review.vote}</p> )
      ) : (
        <p>No reviews available</p>
      )}
    </div>*/
  );
}