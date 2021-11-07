 import React from 'react';
 import './App.css';
 import Navbar from './Components/Navbar';
 import { Switch,Route,Redirect } from 'react-router-dom';
 import Home from './Components/Home.jsx';
 import About from './Components/About.jsx';
 import Work from './Components/Work';
 import Contact from './Components/Contact';
 import Certifications from './Components/Certifications';
 import Connect from './Components/Connect';
 
 const App = () => {
   return (
     <>
    <Navbar/>
     <Connect/>
     <Switch>
       <Route exact path="/" render={Home}/>
       <Route exact path="/about" render={About}/>
       <Route exact path="/work" component={Work}/>
       <Route exact path="/certification" component={Certifications}/>
       <Route exact path="/contact" component={Contact}/>
       <Redirect to="/"/>
     </Switch>
       
     </>
   )
 }
 
 export default App;
 