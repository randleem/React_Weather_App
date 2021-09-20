import React, { useState, useEffect } from "react";
import "./GetWeather.css";

function GetWeather(props) {
  const { town } = props;
  const [getWeather, setGetWeather] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [getFutureWeather, setGetFutureWeather] = useState(true);
  const [futureTemperature, setFutureTemperature] = useState(null);
  const [futureCondition, setFutureCondition] = useState(null);
  const [numberHoursAhead, setNumberHoursAhead] = useState(null);

  useEffect(() => {
    if (getWeather) {
      async function fetchWeather() {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=319365db56c948a9aeb160554211409&q=${town}&aqi=no`
        );
        const data = await res.json();
        console.log(data.current.temp_c);
        setCurrentTemperature(data.current.temp_c);
        setCurrentCondition(data.current.condition.text);
      }
      fetchWeather();
      setGetWeather(false);
    }
  }, [getWeather]);

  useEffect(() => {
    if (getFutureWeather) {
      async function fetchWeather() {
        const res = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=319365db56c948a9aeb160554211409&q=${town}&days=2&aqi=no&alerts=no`
        );
        const data = await res.json();
        console.log(data.forecast.forecastday[0]);
      }
      fetchWeather();
      setGetFutureWeather(false);
    }
  }, [getFutureWeather]);

  return (
    <div className="get-weather-container">
      <div className="get-weather-text">
        Its currently {currentCondition} and {currentTemperature}&deg;C
      </div>
      <h1>Check weather in </h1>
      <div className="dropdown-menu-container">
        <div className="dropdown-holder">Check weather in </div>
        <div className="dropdown-items-container">
          <div className="dropdown-items">1 hour</div>
          <div className="dropdown-items">2 hours</div>
          <div className="dropdown-items">3 hours</div>
        </div>
      </div>
      <div className="future-weather-container">
        In {numberHoursAhead} hour it will be {futureCondition} and{" "}
        {futureTemperature}&deg;C
      </div>
    </div>
  );
}

export default GetWeather;
