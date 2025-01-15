import { useState } from "react";

export default function CreateReviewsForm({ movieId, updateReviews }) {
  const formInitialData = {
    name: "",
    vote: "",
    text: "",
  };
  const [newReview, setNewReview] = useState(formInitialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(newReview)) {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });
        if (response.ok) {
          const updatedReview = await response.json();
          console.log("Review added successfully", updatedReview);
          
          setNewReview(formInitialData);
          
          if (updateReviews) {
            const getReviewsUrl = `http://localhost:3000/movies/${movieId}`;
            const reviewsResponse = await fetch(getReviewsUrl);
            const data = await reviewsResponse.json();
            updateReviews(data.reviews);
          }
        } else {
          console.error("Failed to add review");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Il form non è valido");
    }
  };

  const validateForm = ({ name, text, vote }) => {
    if (!name || !text) return false;
    const voteInt = parseInt(vote);
    if (isNaN(voteInt) || voteInt < 1 || voteInt > 5) return false;
    return true;
  };

  return (
    <>
      <h5>Aggiungi recensione</h5>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={newReview.name}
              onChange={handleChange}
              aria-label="First name"
            />
          </div>
          <div className="col">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              name="text"
              value={newReview.text}
              onChange={handleChange}
              aria-label="Last name"
            />
          </div>
          <div className="col">
            <label htmlFor="vote">Vote</label>
            <select
              className="form-select"
              name="vote"
              value={newReview.vote}
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option value="" disabled>
                Scegli il tuo voto
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <button type="submit" className="mt-4 btn btn-primary">
          Invio
        </button>
      </form>
    </>
  );
}