import React from 'react';
import MainPage from './Components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import JavaPathway from './Components/JavaPathway';
import JavaCourse from './Components/JavaCourse';
import './App.css';
const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <div id="page-wrap">
                    <Switch>
                        <Route path="/" exact ><MainPage /></Route>
                        <Route path="/java-pathway" ><JavaPathway /></Route>
                        <Route path="/java-course" ><JavaCourse /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;