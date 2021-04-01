import axios from 'axios';

const API_KEY = '0f0b10d5fc8d657070b8ed86451a9f60';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//'http://api.openweathermap.org/data/2.5/forecast?q=London&appid=0f0b10d5fc8d657070b8ed86451a9f60';
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // const request = axios.get(url);
    // return {
    //     type: FETCH_WEATHER,
    //     payload: request
    // };

    return axios.get(url)
    .catch(function (error) {
        // handle error
        console.log(error);
      })
        .then(result => {
            return {
                type: FETCH_WEATHER,
                payload: result
            }
        })
}