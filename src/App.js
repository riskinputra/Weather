import React, { Component } from 'react'
import { Link, Element} from 'react-scroll'
import { Provider } from 'react-redux'

import './App.css'

import store from './redux'
import Title from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="header container">
          <Title/>
          <Link className="btn-start" activeClass="active" to="content" spy={true} smooth={true} offset={50} duration={500}>
          Let's Start ...
          </Link>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </header>
        <section className="content">
          <Element name="content" className="container">
            <div className="row" >
              <div className="column">
                <Form/>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <Weather/>
              </div>
            </div>
          </Element>
        </section>
      </div>
      </Provider>
    );
  }
}

export default App;
