import React, { Component } from 'react';
import TagEditor from './components/TagEditor';
import QuestionBox from './components/QuestionBox';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router-dom'

import './App.css';
import AppBar from './components/AppBar';

const screen1Style = {
  width: '100%',
  height: '100vh',
  background: 'lightblue'
};

const screen2Style = {
  width: '100%',
  height: '100vh',
  background: 'pink'
};
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
            <AppBar/>
            <Switch>
              <Route exact path="/" component = {Home}/>
              <Route path="/about" component = {TagEditor}/>
              <Route path="/topics" component={QuestionBox}/>
            </Switch>
            <div className = "screen1" style = {screen1Style}>
            </div>
            <div className = "screen2" style = {screen2Style}>
            </div>
            <div className = "screen3">
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
