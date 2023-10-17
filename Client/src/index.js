// import React from 'react';
// import ReactDom from 'react-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Adjust the path based on your project structure
import { BrowserRouter } from 'react-router-dom';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)