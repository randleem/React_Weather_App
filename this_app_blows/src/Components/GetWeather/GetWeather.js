import React, { useState, useEffect } from "react";
import "./GetWeather.css";

function GetWeather(town) {
  const [getWeather, setGetWeather] = useState(false);

  useEffect(() => {
    if (getWeather) {
      getWeather(false);
    }
  }, [getWeather]);

  return (
    <div className="GetWeather-container">
      <div className="GetWeather-text">getWeather</div>
    </div>
  );
}

export default GetWeather;
