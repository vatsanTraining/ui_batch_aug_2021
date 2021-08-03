import React, { FunctionComponent } from "react";
import { ShowProp } from "../model/Review";


const ShowReview:FunctionComponent<ShowProp> = 
                    ( props:ShowProp ) => {
    return (
    <div>
        <h4>Customer Reviews</h4>
                <p>{props.review.reviewerName}</p>
                 <p>{props.review.rating}</p>
         </div>
    );
}

export default ShowReview;