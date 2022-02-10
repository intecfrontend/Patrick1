import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Input, Card } from "antd";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryMatch, setCountryMatch] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      setCountries(response.data);
    };
    loadCountries();
  }, []);

  const searchInCountriesAndCapitals = (country, capital) => {
    const regexCapital = new RegExp(`${capital}`, "gi");
    let matches = countries.filter(c =>
      // c.name.common.toLowerCase() === country.toLowerCase() ||
      c.capital.match(regexCapital)
    );

    // if (
    //   obj.name.common.toLowerCase() === input1.toLowerCase() ||
    //   obj.capital[0].toLowerCase() === input2.toLowerCase()
    // ) {
    //   return (
    //     <>
    //       <h2>{obj.name.common}</h2> capital:{obj.capital[0]}
    //     </>
    //   );
    // } else {
    //   return "no data";
    // }
    setCountryMatch(matches);
  };
  const searchCountries = text => {
    let matches = countries.filter(country => {
      const regex = new RegExp(`${text}`, "gi");
      return country.name.common.match(regex);
      // || country.capital.match(regex);
    });
    setCountryMatch(matches);
  };
  return (
    <div className="App">
      <h1>Country Search</h1>
      <Input
        placeholder="Enter Country or Capital Name"
        onChange={e =>
          searchInCountriesAndCapitals(e.target.value, e.target.value)
        }
        className="countryInput"
      ></Input>
      {countryMatch &&
        countryMatch.map((item, index) => (
          <div key={index}>
            <Card>
              <br />
              <br />
              <h2>{item.name.common}</h2> capital:{item.capital}
              {console.log(item.name.common)}
              {console.log(item.capital)}
            </Card>
          </div>
        ))}
      {console.log(countryMatch)}
    </div>
  );
}

export default App;
