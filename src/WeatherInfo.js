import React from "react";
import CurrentWeather from "./CurrentWeather";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormatDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            {/* weather icon here  */}
                        </div>

                        <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
