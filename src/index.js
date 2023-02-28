import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'
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

