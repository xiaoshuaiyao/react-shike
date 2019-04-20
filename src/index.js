import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./reset"
import App from './App';
import { Provider } from "react-redux"
import store from "./store"
ReactDOM.render(
    <Provider store={store}>
        <App />
        <GlobalStyle />
    </Provider>


    , document.getElementById('root'));

