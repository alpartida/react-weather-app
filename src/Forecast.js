import React from "react";

export default function Forecast () {
  return (
 <div className="weather-forecast">
    <div className="days">
          <div className="day-1">
            <p>today</p>
          </div>
          <div className="day-2">
            <p>tomorrow</p>
          </div>
        </div>
        <div className="forecast">
          <div className="row">
            <div className="col">
              <h4>now</h4>
              <p>60°</p>
              <i className="fas fa-sun"></i>
            </div>
            <div className="col">
              <h4>noon</h4>
              <p>60°</p>
              <i className="fas fa-cloud-sun"></i>
            </div>
            <div className="col">
              <h4>4pm</h4>
              <p>60°</p>
              <i className="fas fa-cloud-sun"></i>
            </div>
            <div className="col">
              <h5>tonight</h5>
              <p>60°</p>
              <i className="fas fa-cloud-moon-rain"></i>
            </div>
          </div>
        </div>
      </div>
            );
    }