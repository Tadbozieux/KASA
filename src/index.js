import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home/Home'
import Maison from './pages/Maison/Maison'
import Apropos from './pages/Apropos/Apropos'
import Header from './components/Header/Header'
import Error from '../src/pages/Error/Error'
import './index.css'






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Router >
        <Header />
            <Routes>
                <Route path="/KASA/" element={<Home />}/>
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Gallery/:id" element={<Maison />} />
                <Route path="*" element={<Error/>}/> 
            </Routes>
    </Router>
</React.StrictMode>
)

