import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Form.css'
import { get_weather } from '../redux/actions/weatherActions'

class Form extends Component {
  state = {
    city: '',
    country: '',
    error: ''
  }
  handleClickSubmit () {
    this.props.addWeather(this.state)
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <input className="form" type="text" name="city" placeholder="Input The City You want to Know" value={this.state.city} onChange={event => this.setState({city: event.target.value})} /> 
          </div>
          <div className="col-4">
            <input className="form" type="text" name="country" placeholder="Country...." value={this.state.country} onChange={event => this.setState({country: event.target.value})} />
          </div>
          <div className="col-2">
            <input type="submit" onClick={() => this.handleClickSubmit()} value="Submit" />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWeather: payload => dispatch(get_weather(payload))
  }
}

export default connect(null, mapDispatchToProps) (Form)
