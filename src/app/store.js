import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import {legacy_createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from './reducer'

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
