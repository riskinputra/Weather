import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import weatherReducers from './reducers/weatherReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
  weatherReducers
})

const middleware = applyMiddleware(thunk, logger)
const enhancher = composeEnhancers(middleware)
const store = createStore(reducers, enhancher)

export default store