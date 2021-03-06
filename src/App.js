import React, { useState, useEffect } from 'react';
import './App.css';

import './fonts/akbar.ttf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import simpsonsLogo from '../src/assets/yellow_logo.png';

const App = () => {
  const [quotes, setQuotes] = useState("");

  
  const getQuote = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
      console.log(data[randomNum]);
      console.log(setQuotes);
    });
  }

  return (
    <div className="App">
       {/* <div><img src='../src/assets/yellow_logo.png' /></div> */}
      
      <h1 className='App-header'>The Simpsons...</h1>
      <div className='quote-container'>
       <div className='quote-text'>
            {quotes.quote}
        </div>
        <div className='quote-author'>
          {quotes.character}
          <img className='img-simpson-character' src={quotes.image} alt='Simpsons character' />
        </div>
        <div className="button-container">
          <button onClick={getQuote} className="twitter-button" id="twitter" title="Tweet this!">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </button>
          <button onClick={getQuote} className='quote-button'>"New Quote" </button>
        </div>
      </div>
    </div>
  );
}

export default App;
