import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow.js"


const BASE_URL =  'http://api.exchangeratesapi.io/v1/latest?access_key=47c4679efbffa2e81f3656e6de77b704'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState([])
  const [toCurrency, setToCurrency] = useState([])

  //currencyOptions represents current state of app, 2nd arg allows us 
  // set the currencyOptions to something new

  //first arg for useState

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]

        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
      })
  }, [])

  /// ...Object.keys(data.rates) < three dots destructures the array

  //empty array  => whenever the items in the array change we will want to 
  //rerun the useEffect(), we only ever call this once because of empty Array
  //useEffect only get called when application first loads

  //fetch BASE_URL and conver it to JSON 

  return (
    <>
      <h1> Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
      />
    </>
  );
}

export default App;
