import React from 'react'
import ForecastCard from '../forecastCard/ForecastCard';
import './TodayCard.css'

const TodayCard = ({ actualTemp, actualCity, forecastTemp }) => {

        const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const DAY = DAYS[new Date().getDay()];

        const MONTH = MONTHS[new Date().getMonth()];

        const NUMBER_DAY = new Date().getDate();

        const YEAR = new Date().getFullYear();

        const TEXT_CONDITION = Object.values(actualTemp.condition);

        return (
                <div>
                        <div className='cardDayContainer'>
                                <div className="cityName">{actualCity.toUpperCase()}</div>
                                <div className="dateContainer">{DAY}, {MONTH} {NUMBER_DAY}, {YEAR}</div>
                                <div className="temperatura">{actualTemp.temp_c} °C</div>
                                <div className="condition">{TEXT_CONDITION[0]}</div>
                                <div className="cardForecastContainer">
                                        {forecastTemp.map(dayInfo => {
                                                console.log('map', dayInfo)
                                                return (
                                                        <ForecastCard dayInfo={dayInfo} />
                                                )
                                        })}
                                </div>
                        </div>
                </div>
        )
}

export default TodayCard;