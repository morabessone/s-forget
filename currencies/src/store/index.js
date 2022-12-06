import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import reducer from "../reducer/index";


const store = configureStore(reducer, applyMiddleware(thunk))

export default store;