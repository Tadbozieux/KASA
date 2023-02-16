import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
console.log(React.version);

 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/survey" element={<Survey />} />
        </Routes>
    </Router>
</React.StrictMode>
)