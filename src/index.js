import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
console.log(React.version);

 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Router>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route  path='Freelances' element={<Freelances/>}/>
                <Route path="*" element={<Error/>}/> 
            </Routes>
    </Router>
</React.StrictMode>
)