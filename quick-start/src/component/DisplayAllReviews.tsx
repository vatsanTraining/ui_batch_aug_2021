import React from "react";

import FunctionComponent from 'react';
import { ShowAllProp } from '../model/Review';

export const DisplayAllReviews:React.FunctionComponent<ShowAllProp> =
               ({reviewList=[]}) =>{
    return (
        <div>
             <ul>
        {reviewList.map((eachReview,index) => (
            <p key= {index}>{eachReview.reviewerName}{eachReview.id}{eachReview.review}{eachReview.rating}</p>
        ))}
    </ul>

        </div>
    )
}

