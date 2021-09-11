import LoggedReducer from './Islogged';
import userReducer from './User'

import {combineReducers } from 'redux'

const rootReducer = combineReducers({
    Logged: LoggedReducer,
    User: userReducer
});

export default rootReducer