import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowFlag from './component/ShowFlag';
import BannerComponent from './component/BannerComponent';
import { Props } from './model/Review';
import ShowReview from './component/ShowReviewComponent';

function App() {

   const weddingCard:Props =
        {id:101,reviewerName:"ganesh",
               review:"excellent print quality",rating:4.7};
  
               return (
    <div className="App">

      <ShowFlag countryName={'india'}></ShowFlag>
      <BannerComponent title={'Menaka Cards'} subtitle={'Chennai'}/>
      <ShowReview review={weddingCard}></ShowReview>
         </div>
  );
}

export default App;
