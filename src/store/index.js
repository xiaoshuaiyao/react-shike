import {createStore,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {combineReducers} from "redux-immutable"
import Home from "./reducer/home"

const reducer = combineReducers({
         Home
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store