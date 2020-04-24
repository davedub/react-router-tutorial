import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import CatDetails from './components/CatDetails'
import Navbar from './components/navbar'
import Birds from './pages/birds'
import Cats from './pages/cats'
import Dogs from './pages/dogs'
import Monkeys from './pages/monkeys'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <h1>Website Header</h1>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/birds" exact component={Birds} />
                    <Route path="/cats" exact component={Cats} />
                    <Route path="/dogs" exact component={Dogs} />
                    <Route path="/monkeys" exact component={Monkeys} />
                    <Route path="/cats/:id" exact component={CatDetails} />
                </Switch>
            </Router>
        </div>
    )
}
const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default App
