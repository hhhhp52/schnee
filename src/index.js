import React from 'react'
import ReactDOM from 'react-dom/client'

import HomePage from './home/home.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(
        React.StrictMode,
        null,
        React.createElement(HomePage)
    )
);
