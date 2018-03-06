import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Weather.css'

class Weather extends Component {
  render() {
    let weather = this.props.weather[0]

    return (
      <div>
        {weather && <div className="weather">
          {weather && weather.name && weather.sys.country && <h1 className="location">{weather && weather.name}, {weather.sys.country}</h1>}
          {weather && weather.main.temp && <p>Tempreature: {weather.main.temp} </p>}
          {weather && weather.main.humidity && <p>Humidity: {weather.main.humidity}</p>}
          {weather && weather.weather[0].description && <p>Condition: {weather.weather[0].description}</p>}
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weatherReducers.weather
  }
}

export default connect(mapStateToProps)(Weather)
