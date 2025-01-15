import { useState } from "react";

export default function CreateReviewsForm(){
    const[newReview, setNewReview]= useState({
       name:"",
       vote:"",
       text:"", 
    });




return(
    <>
    <h5>Aggiungi recensione</h5>
    <form action="">
    <div className="row">
  <div className="col">
    <label htmlFor="name">name</label>
    <input type="text" className="form-control" placeholder="" aria-label="First name"/>
  </div>
  <div className="col">
    <label htmlFor="text">text</label>
    <input type="text" className="form-control" placeholder=" " aria-label="Last name"/>
  </div>
  <div className="col">
    <label htmlFor="vote">vote</label>
  <select class="form-select" aria-label="Default select example">
  <option selected></option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
  </div>
</div>
<button className="mt-4 btn btn-primary">invio</button>
    </form>
    </>
)
};