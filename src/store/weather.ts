import { createStore, createEffect } from 'effector';
import { api } from '../services/api';

export const getWeather = createEffect(async (city: string) => {
    const responce = await api.GET(`forecast.json?q=${city}&days=5&key=5ae9f7a0ed2241af82091634212103`);
    return responce
});
export const $weather = createStore<any>({})
    .on(getWeather.doneData, (_, weather) => weather);