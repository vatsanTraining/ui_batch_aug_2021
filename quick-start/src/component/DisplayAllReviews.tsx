import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FunctionComponent from 'react';
import { ShowAllProp } from '../model/Review';

export const DisplayAllReviews:React.FunctionComponent<ShowAllProp> =
               ({reviewList=[]}) =>{
    return (
        <div>
             <table className="table table-striped table-bordered">
                <thead>
                 <th>Review Name</th>
                 <th>Review</th>
                 <th>Rating</th>
                </thead>
                <tbody>
                    
        {reviewList.map((eachReview,index) => (
            <tr key= {index}><td>{eachReview.reviewerName}</td><td>{eachReview.review}</td><td>{eachReview.rating}</td></tr>
        ))}

</tbody>
    </table>

        </div>
    )
}

