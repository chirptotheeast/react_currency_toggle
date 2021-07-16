import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow.js"

// const API_KEY = "0642038f47c4679efbffa2e81f3656e6de77b704";
const BASE_URL =  'http://api.exchangeratesapi.io/v1/latest?access_key=47c4679efbffa2e81f3656e6de77b704'

function App() {

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json()
      .then(data => console.log(data)))
  }, [])

  //empty array  => whenever the items in the array change we will want to 
  //rerun the useEffect(), we only ever call this once because of empty Array
  //useEffect only get called when application first loads

  //fetch BASE_URL and conver it to JSON 

  return (
    <>
    <h1> Convert</h1>
    <CurrencyRow />
    <div className="equals">=</div>
    <CurrencyRow />
  </>
  );
}

export default App;
