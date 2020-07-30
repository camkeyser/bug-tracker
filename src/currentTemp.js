import React from 'react'
import $ from 'jquery'

// this component will grab current weather data from the OpenWeatherMap API

class CurrentTemp extends React.Component {

    componentDidUpdate() {
        this.grabData();
    }

    grabData() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=draper,utah&appid=2225780abf3f8f7be7e1a3aa2a2a18df&units=imperial")
        .then(res => res.json())
        .then(
            (result) => {
                let cityName = result.name;
                let currentTemp = result.main.temp;
                let currentTempSimp = Math.trunc(currentTemp) + '\xB0';
                let weatherType = result.weather[0].main;
                let weatherIcon = result.weather[0].id;

                $('.currentTempBox').append('<div class="cityBox">' + cityName + '</div><div class="tempBox">' + currentTempSimp + '<div class="owf owf-' + weatherIcon + '"></div></div><div class="typeBox">' + weatherType + '</div>');
            },
            (error) => {
            console.log(error)
            }
        )
    }    

        
    render() {
        return (
            <div className="currentTempBox"></div>
        )
    }
        
}

export default CurrentTemp