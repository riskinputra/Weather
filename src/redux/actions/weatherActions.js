import axios from 'axios'

export const fetch_weather_in_city = (weather) =>({
  type: 'WEATHER_LIST',
  payload: {
    weather
  }
})

export const get_weather = (e) => {
  return async (dispatch, getState) => {
    try {
      const city = e.city
      const country = e.country
      const APP_KEY = "027d93aa3a8d37322cd917f861430d00"
      const API_CALL = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_KEY}&units=metric`)
      let fetchWeather = getState().weatherReducers.weather.concat(API_CALL.data)
      dispatch(fetch_weather_in_city(fetchWeather))
    } catch (error) {
      console.error(error)
    }    
  }
}