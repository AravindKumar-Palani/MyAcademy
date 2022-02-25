import React from 'react';
import MainPage from './Components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import JavaPathway from './Components/JavaPathway';
import JavaCourse from './Components/JavaCourse';
import FullStackPathway from './Components/FullStackPathway';
import { createTheme } from '@material-ui/core/styles';
import {  ThemeProvider } from '@material-ui/core';
import './App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ccd9ff'
        }
    }
})
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <Header />
                    <div id="page-wrap">
                        <Switch>
                            <Route path="/" exact ><MainPage /></Route>
                            <Route path="/java-pathway" ><JavaPathway /></Route>
                            <Route path="/java-course" ><JavaCourse /></Route>
                            <Route path="/fullStack-pathway" ><FullStackPathway /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;