import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App"
import store from "./store/index"
import { ContractContext } from './context/ContractContext';

import { Provider } from 'react-redux';
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from "react-toastify";

window.store = store;


ReactDOM.render(
    <Provider store={store}>
        <ContractContext>
            <ParallaxProvider>
                <ToastContainer />
                <App />
            </ParallaxProvider>
        </ContractContext>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
