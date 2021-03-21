import React from 'react';
import './menu.scss';
import { useFormik } from 'formik';
import { getWeather } from '../../store/weather';

interface ICityValue {
    city: string
}

export const Menu: React.FC = () => {

    const formik = useFormik<ICityValue>({
        initialValues: {
            city: ''
        },
        onSubmit: (values : ICityValue) => {
            getWeather(values.city);
        }
    });

    return(
        <form className="menu" onSubmit={formik.handleSubmit}>
            <h2 className="menu__title">Weather App</h2>
            <input
                className="menu__city"
                type="text"
                placeholder="enter a city" 
                value={formik.values.city}
                name="city"
                onChange={formik.handleChange}
                autoComplete="off"
            />
            <button className="menu__get" type="submit">
                GET WEATHER
            </button>
        </form>
    )
};
