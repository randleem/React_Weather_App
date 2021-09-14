import React, { useState, useEffect } from "react";
import "./GetWeather.css";

function GetWeather(props) {
  const { town } = props;
  const [getWeather, setGetWeather] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [currentCondition, setCurrentCondition] = useState(null);

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

  return (
    <div className="GetWeather-container">
      <div className="GetWeather-text">
        Its currently {currentCondition} and {currentTemperature}&deg;C
      </div>
    </div>
  );
}

export default GetWeather;
