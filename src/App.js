import './App.css';


import Auth from './pages/Auth.jsx'

import { useState, useEffect } from "react";
// import { axios } from "axios";

import Card from './components/Card.jsx'

function App() {
  let url = "https://restcountries.eu/rest/v2/all";
  let option = {
    method: "GET"
  };

  /* this variable was created only as checker for 'useEffect'  */
  let checker = null;

  /* get a status of request check it and if it was success rerender a page  */
  function statusChecker(status) {
    checker = status;
    // console.log('status', status);
    // console.log('checker', checker);

    if (checker == 'success') {
      fetch(url, option).then(result => {
        result.json().then(output => {
          setCountryList(output.map(item => <Card name={item.name} img={item.flag} />));
        });
      });
    }
  }

  const [countryList, setCountryList] = useState(<Auth statusChecker={statusChecker} />)

  // useEffect(() => {
  //   /* rendering all names as elements*/
  //   console.log('useEffect', checker );
  //   if (checker == 'success') {
  //     fetch(url, option).then(result => {
  //       result.json().then(output => {
  //         setCountryList(output.map(item => <Card name={item.name} img={item.flag} />));
  //       });
  //     });
  //   }
  // }, checker)


  /* REMINDER. The second .then because .json() return Promise 
  .json() - Parser for JSON date
  */

  /* UseEffect change the countryList state only once when the component did amount */
  // useEffect(() => {
  //   /* rendering all names as elements*/
  //   fetch(url, option).then(result => {
  //     result.json().then(output => {
  //       setCountryList(output.map(item => <Card name = {item.name} img = {item.flag}/>));
  //     });
  //   });
  // }, [])

  return (
    <div className="App App-header">
      {countryList}
    </div>
  );
}

export default App;
