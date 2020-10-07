import React from 'react'
import './ForecastCard.css'

const ForecastCard = ({ dayInfo }) => {

        const TEXT_CONDITION = Object.values(dayInfo.day.condition)

        const IMG_DAY = TEXT_CONDITION[1].slice(2)

        const MIN_TEMP = dayInfo.day.mintemp_c;

        const MAX_TEMP = dayInfo.day.maxtemp_c;

        const YEAR_NUMBER = dayInfo.date.slice(0, 4);

        const MONTH_NUMBER = dayInfo.date.slice(5, 7);

        const DAY_NUMBER = dayInfo.date.slice(8, 10);

        const THIS_DAY = new Date().getDate()

        // Function to get day of week

        const getDay = (y, m, d) => {
                var days = ['Sunday', 'Monday', 'Tuesday',
                        'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var d = new Date(y, --m, d);
                return d && days[d.getDay()];
        }

        return (
                <div className='forestCardContainer'>
                        <img src={`http://${IMG_DAY}`} />
                        <div className="minMaxTemp">{MIN_TEMP}°C / {MAX_TEMP}°C</div>
                        { DAY_NUMBER == THIS_DAY ?
                                (
                                        <div className='textDay'>Today</div>
                                ) : (
                                        <div className='textDay'>{getDay(YEAR_NUMBER, MONTH_NUMBER, DAY_NUMBER)}</div>
                                )}

                </div>
        )
}

export default ForecastCard;