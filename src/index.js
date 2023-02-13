import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'

 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Router>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/survey">
            <Survey />
        </Route>
    </Router>
</React.StrictMode>
)