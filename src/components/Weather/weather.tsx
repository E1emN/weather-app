import React from 'react';
import './weather.scss';
import { $weather } from '../../store/weather';
import { useStore } from 'effector-react';
import moment from 'moment';

export const Weather: React.FC = () => {

    const weather = useStore($weather);
    console.log(weather);
    return(
        <div className="weather">
            <span className="weather__city">{weather.location && weather.location.name}</span>
            <ul className="weather__weather">
                {weather.forecast && weather.forecast.forecastday.map((w: any, i: number) => (
                    <li key={i}>
                        <span className="weather__weather-date">
                            {moment(w.date).format('dddd')}
                        </span>
                        <span className="weather__weather-temp">
                            {w.day.maxtemp_c}&#176;
                        </span>
                        <img alt="" src={w.day.condition.icon} />
                    </li>
                ))}
            </ul>
        </div>
    )
};
