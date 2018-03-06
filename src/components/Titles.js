import React, { Component } from 'react'
import './Title.css'
class Titles extends Component {
  render() {
    return (
      <div>
        <h1 className="title">WEATHER FINDER</h1>
        <hr style={styles.hr}/>
        <p className="subTitle">Find Out Temperature, Condition and More ....</p>
      </div>
    )
  }
}

const styles = {
  hr:{
    margin: 'auto', 
    width:'80%', 
    border: '1.5px solid #fff'
  }
}
export default Titles