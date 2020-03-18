import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import ThemeContext from './components/ThemeContext';
ReactDOM.render(
    <BrowserRouter>
        <ThemeContext.Provider value="green">
            <App />
        </ThemeContext.Provider>,
    </BrowserRouter>,
    document.getElementById('root'))