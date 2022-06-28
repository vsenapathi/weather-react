import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container ">
      <div className="row">
        <div className="col-1 currentIcon d-flex justify-content-end align-items-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            width="100px"
          />
        </div>
        <div className="col-2 temp d-flex align-items-center">
          <h1 className="tempValue">61</h1>
          <p className="tempUnits">
            {" "}
            <a href="#" className="fahrUnits disabled">
              °F
            </a>{" "}
            |{" "}
            <a href="#" className="celsiusUnits active">
              °C
            </a>{" "}
          </p>
        </div>
        <div className="col-2 conditions">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 64%</li>
            <li>Wind: 7 mph</li>
          </ul>
        </div>
        <div className="col-3" />
        <div className="col-3 hero">
          <div className="row">
            <h2 className="location h1">London</h2>
          </div>
          <div className="row dateTime d-block pe-2">Monday 22:00</div>
          <div className="row currentDescription d-block pe-2">Clear</div>
        </div>
      </div>
      <div className="row m-5" />
      <div className="row">
        <div className="col">
          <div className="row today">Tue</div>
          <div className="row">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
              className="conditionIcon"
            />
          </div>
          <div className="row forecastTemp">
            71° <span className="forecastLow"> 58°</span>
          </div>
        </div>
        <div className="col">
          <div className="row">Tue</div>
          <div className="row">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
              className="conditionIcon"
            />
          </div>
          <div className="row forecastTemp">
            71° <span className="forecastLow"> 58°</span>
          </div>
        </div>

        <div className="col">
          <div className="row">Wed</div>
          <div className="row">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
              className="conditionIcon"
            />
          </div>
          <div className="row forecastTemp">
            71° <span className="forecastLow"> 58°</span>
          </div>
        </div>

        <div className="col">
          <div className="row">Thu</div>
          <div className="row">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
              className="conditionIcon"
            />
          </div>
          <div className="row forecastTemp">
            71° <span className="forecastLow"> 58°</span>
          </div>
        </div>

        <div className="col">
          <div className="row">Fri</div>
          <div className="row">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
              className="conditionIcon"
            />
          </div>
          <div className="row forecastTemp">
            71° <span className="forecastLow"> 58°</span>
          </div>
        </div>

        <div className="col">
          <div className="row">Sat</div>
          <div className="row">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="cloudy"
              className="conditionIcon"
            />
          </div>
          <div className="row forecastTemp">
            71° <span className="forecastLow"> 58°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
