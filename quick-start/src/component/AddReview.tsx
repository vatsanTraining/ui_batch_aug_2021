import React from "react";
import { Props } from '../model/Review';
import { useForm } from '../useFormHook';
import axios from 'axios';


function AddReview() {
        const initialState:Props = {
            id: 0,
    reviewerName: "",
            review:'',
            rating:0
        };
    
    const { onChange, onSubmit, values } = useForm(
            loginUserCallback,
            initialState
        );
      function loginUserCallback() {
            console.log(values); // post to Backend
    axios.post<Props>("http//localhost:8080/api/reviews",values).then(
        result =>{console.log(result.data)} 
    )
    }
    return (
                <form onSubmit={onSubmit}>
            <label>Review Id</label>
            <input name='id' id='reviewId' type='text'
               onChange={onChange} required />

<label>Reviewer Name</label>
           
          <input name='reviewerName' id='reviewerName' type='text'
                    onChange={onChange}
                        required/>

<label>Review </label>
           
  <input name='review' id='review' type='text'
                    onChange={onChange}
                        required/>
        
        <label>Rating</label>
           
          <input name='rating' id='rating' type='text'
                    onChange={onChange}
                        required/>
        
                    <button type='submit'>Add</button>
                </form>

            ); }
        export default AddReview;
        