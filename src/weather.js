import React from 'react'
import CurrentTemp from './currentTemp'

// this component grabs forecast data from the Accuweather API

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            forecast1: "",
            forecast2: "",
            forecast3: ""
        }
    }
    componentDidMount() {
        fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/2195948?apikey=pOEnyZAkFGxS53KY2HL1LJj31jQoDG4h")
        .then(res => res.json())
        .then(
            (result) => {
                // 3 day forecast objects
                let dayOne = result.DailyForecasts[1];
                let dayTwo = result.DailyForecasts[2];
                let dayThree = result.DailyForecasts[3];
                // get date, format to MM/DD
                // Tomorrow
                let tomorrow = dayOne.Date.split("T")[0]
                let formatMonth = tomorrow.split("-")[1]
                let formatDay = tomorrow.split("-")[2]
                let date1 = formatMonth + "-" + formatDay
                // 2 days out
                let twoDaysOut = dayTwo.Date.split("T")[0]
                let formatMonth2 = twoDaysOut.split("-")[1]
                let formatDay2 = twoDaysOut.split("-")[2]
                let date2 = formatMonth2 + "-" + formatDay2
                // 3 days out
                let threeDaysOut = dayThree.Date.split("T")[0]
                let formatMonth3 = threeDaysOut.split("-")[1]
                let formatDay3 = threeDaysOut.split("-")[2]
                let date3 = formatMonth3 + "-" + formatDay3
                // get max temps for next 3 days
                let maxTempOne = Math.trunc(dayOne.Temperature.Maximum.Value) + '\xB0';
                let maxTempTwo = Math.trunc(dayTwo.Temperature.Maximum.Value) + '\xB0';
                let maxTempThree = Math.trunc(dayThree.Temperature.Maximum.Value) + '\xB0';
                //get min temps for next 3 days
                let minTempOne = Math.trunc(dayOne.Temperature.Minimum.Value) + '\xB0';
                let minTempTwo = Math.trunc(dayTwo.Temperature.Minimum.Value) + '\xB0';
                let minTempThree = Math.trunc(dayThree.Temperature.Minimum.Value) + '\xB0';
                // setup the html for the forecast nodes
                let weatherNode1 = `<div class="dayName">${date1}</div><div class="tempForecasts">${maxTempOne}/${minTempOne}</div><div class="tempLabel">High / Low</div>`;   
                let weatherNode2 = `<div class="dayName">${date2}</div><div class="tempForecasts">${maxTempTwo}/${minTempTwo}</div><div class="tempLabel">High / Low</div>`; 
                let weatherNode3 = `<div class="dayName">${date3}</div><div class="tempForecasts">${maxTempThree}/${minTempThree}</div><div class="tempLabel">High / Low</div>`; 
                this.setState({
                    forecast1: weatherNode1,
                    forecast2: weatherNode2,
                    forecast3: weatherNode3

                })
                this.forecastBoxes(); 
            },
            (error) => {
            console.log(error)
            }
        )
    }
    forecastBoxes() {
        document.querySelector('.fcOne').innerHTML = this.state.forecast1
        document.querySelector('.fcTwo').innerHTML = this.state.forecast2
        document.querySelector('.fcThree').innerHTML = this.state.forecast3
    }    
    render() {
        return (
            <div className="nodeBox weatherNode">
                <CurrentTemp />
                <div className="forecastBox">
                    <div className="fc fcOne"></div>
                    <div className="fc fcTwo"></div>
                    <div className="fc fcThree"></div>
                </div>
            </div>    
        )
    }
}


export default Weather