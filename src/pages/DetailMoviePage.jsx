import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CreateReviewsForm from '../components/CreateReviewsForm';


export default function DetailMoviePage(){
    const {id: movieId} = useParams();
const[movie, setMovie] =useState(null);
const [reviews, setReviews] =useState([]);
const updateReviews = (newReviews) => {
  setReviews(newReviews);
};

useEffect(() => {
  
    fetch("http://localhost:3000/movies/"+movieId)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setReviews(data.reviews)
      });
  }, []);
  return (

    <>
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card m-5 p-3" style={{ width: "18rem" }}>
            <div className="card-body">
              {movie && <h3 className="card-title">{movie.title}</h3>}
              {movie && <h6 className="card-text">Regista: <strong>{movie.director}</strong></h6>}
              {movie && <h6 className="card-text">Genere: <strong>{movie.genre}</strong></h6>}
              {movie && <h6 className="card-text">Anno di pubblicazione: <strong>{movie.release_year}</strong></h6>}
            </div>
            <Link to={'/movies'}>
              <button className='btn btn-primary w-100'>
                Ritorna alla lista film
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card m-5 p-3">
            <div className="card-body">
              <h2>Recensioni</h2>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <p key={index}>
                    <strong>{review.name}</strong>: {review.text}<br />
                    Rating: <strong>{review.vote}</strong>
                  </p>
                ))
              ) : (
                <p>No reviews available</p>
              )}
              <div className='pt-3'>
                <CreateReviewsForm updateReviews={updateReviews} movieId={movieId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
    