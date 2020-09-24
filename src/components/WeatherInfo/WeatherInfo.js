import React, { useState, useEffect } from "react";
import "./WeatherInfo.css";
import axios from "axios";

export default function WeatherInfo({ zipCode }) {
    let [weather, setWeather] = useState();

    // Formatting the description of the weather to title case
    function formatTitleCase(string) {
        let wordArray = string.split(" ");
        let upperCaseArray = [];
        for (let i = 0; i < wordArray.length; i++) {
            upperCaseArray.push(
                wordArray[i][0].toUpperCase() + wordArray[i].slice(1)
            );
        }
        return upperCaseArray.join(" ");
    }

    // Use Effect Hook here is setting up the initial data load and waiting for a new zipcode state to get new data
    useEffect(() => {
        async function getData(zip) {
            let response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=709847967f5e54b97308c1b2cae4dee5`
            );
            setWeather(response.data);
        }
        getData(zipCode);
    }, [zipCode]);

    // Only returns the information when the weather data loads preventing loading errors
    return weather ? (
        <div id='weatherContainer'>
            <div className='cityContainer'>
                <p id='city'>{weather.name}</p>
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt='weather icon'></img>
            </div>
            <p id='description'>
                {formatTitleCase(weather.weather[0].description)}
            </p>
            <p id='temp'>{Math.round(weather.main.temp)}˚</p>
            <div className='tempContainer'>
                <p className='minmax'>{Math.round(weather.main.temp_min)}˚</p>
                <p className='minmax'>{Math.round(weather.main.temp_max)}˚</p>
            </div>
        </div>
    ) : (
        <div>Loading.....</div>
    );
}
