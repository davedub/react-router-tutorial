import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import CatDetails from './components/CatDetails';
import Navbar from './components/navbar';
import Birds from './pages/birds';
import Cats from './pages/cats';
import Dogs from './pages/dogs';
import Monkeys from './pages/monkeys';

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
           <Route path="/:id" exact component={CatDetails} />
        </Switch>
        </Router>
        </div>
      )
  }
const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>
)}

export default App;
