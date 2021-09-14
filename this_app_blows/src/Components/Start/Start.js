import React, { useState, useEffect } from "react";
import "./Start.css";
import pic1 from "../Emma_Trailwalker/Screenshot 2021-09-14 at 17.40.59.png";
import GetWeather from "../GetWeather/GetWeather.js";

function Start() {
  return (
    <div className="start-container">
      <div className="start-text">
        <h1>Bramblers Start Time 9:00am</h1>
        <img src={pic1} alt="bramblers" className="coursePics"></img>
        <GetWeather town={"Portsmouth"} />
      </div>
    </div>
  );
}

export default Start;
