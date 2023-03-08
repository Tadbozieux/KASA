import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import { createGlobalStyle } from 'styled-components'
import './index.css'
// get our fontawesome imports


console.log(React.version);

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Router>
        <GlobalStyle/>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="Apropos" element={<Apropos />} />
                <Route path="*" element={<Error/>}/> 
            </Routes>
    </Router>
</React.StrictMode>
)

