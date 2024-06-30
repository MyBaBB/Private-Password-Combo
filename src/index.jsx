// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Router>
        <Route path='/' component={App} />
    </Router>
    </React.StrictMode>
);

 
