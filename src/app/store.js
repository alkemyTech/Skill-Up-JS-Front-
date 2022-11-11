// eslint-disable-next-line camelcase
import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'

export const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
