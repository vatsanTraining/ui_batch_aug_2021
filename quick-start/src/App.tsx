import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowFlag from './component/ShowFlag';

function App() {
  return (
    <div className="App">

      <ShowFlag countryName={'india'}></ShowFlag>
    </div>
  );
}

export default App;
