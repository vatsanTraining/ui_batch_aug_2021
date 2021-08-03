import React,{ useEffect }  from "react";
import {Props} from '../model/Review'
import axios from "axios";
import { DisplayAllReviews } from './DisplayAllReviews';
function FetchDataFromComponent() {
    
    const [list, setList] = 
                React.useState<Props[]>([]);
    useEffect(() => {
       axios.get<Props[]>('http://localhost:8080/api/reviews')
                  .then(result => {  
                    setList(result.data)});     
      }, []);
 return (
            <div>
                <DisplayAllReviews reviewList={list}/>
            </div>
        );
    }
    export default FetchDataFromComponent;
    