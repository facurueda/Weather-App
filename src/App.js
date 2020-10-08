import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import axios from "axios";
import TodayCard from "./components/todayCard/TodayCard";

const App = () => {
  const [actualTemp, setActualTemp] = useState([]);
  const [forecastTemp, setForecastTemp] = useState([]);
  const [actualCity, setActualCity] = useState(null);

  const onSearch = (city) => {
    axios({
      method: "GET",
      url: `https://api.weatherapi.com/v1/forecast.json?key=6bc7f8e29de0427d829180352200710&q=${city}&days=10`,
    })
      .then((response) => {
        setActualTemp(response.data.current);
        setForecastTemp(response.data.forecast.forecastday);
        setActualCity(city);
        console.log(actualCity);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="appContainer">
      <div className="searchContainer">
        <Search onSearch={onSearch} />
      </div>
      <div className='cardContainer'>
        {actualCity ? (
          <TodayCard
            actualTemp={actualTemp}
            actualCity={actualCity}
            forecastTemp={forecastTemp}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
