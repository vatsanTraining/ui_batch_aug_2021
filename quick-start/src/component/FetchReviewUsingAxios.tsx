import React,{ useEffect }  from "react";
import {Props} from '../model/Review'
import axios from "axios";
import { DisplayAllReviews } from './DisplayAllReviews';
function FetchDataFromComponent() {
    
    const [repositories, setRepositories] = 
                React.useState<Props[]>([]);
    useEffect(() => {
        const result =  axios.get<Props[]>('http://localhost:8080/api/reviews')
                  .then(result => {  
                    setRepositories(result.data)});     
      }, []);
 return (
            <div>
                <DisplayAllReviews reviewList={repositories}/>
            </div>
        );
    }
    export default FetchDataFromComponent;
    