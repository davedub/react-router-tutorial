import React from 'react';
import './App.css';

import Navbar from './components/navbar';

import Birds from './pages/birds';
import Cats from './pages/cats';
import Dogs from './pages/dogs';
import Monkeys from './pages/monkeys';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
<div className="App">
<Router> 
<Navbar />  
<h1>Website Header</h1>
    <Switch>
      <Route path="/" exact component={Home} />    
      <Route path="/Birds" exact component={Birds} />    
      <Route path="/Cats" exact component={Cats} />    
      <Route path="/Dogs" exact component={Dogs} />    
      <Route path="/Monkeys" exact component={Monkeys} />    
    </Switch>
  </Router>
  </div>
  );
}
const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>
)}

export default App;
