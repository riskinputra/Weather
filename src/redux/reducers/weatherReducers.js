const initialState = {
  weather: []
}

const weatherReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'WEATHER_LIST':
      return {...state, weather: action.payload.weather}
    default:
      return state
  }
}

export default weatherReducers