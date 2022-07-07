import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast container justify-content-evenly align-items-center">
      <div className="row">
        <div className="col">
          <div className="row today">Mon</div>
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
