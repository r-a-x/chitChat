import React, { Component } from 'react';
import TagEditor from './components/TagEditor';
import QuestionBox from './components/QuestionBox';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
            <div className = "screen1" style = {screen1Style}>
              <Route exact path="/" component = {Home}/>
            </div>
            <div className = "screen2" style = {screen2Style}>
              <Route path="/about" component = {TagEditor}/>
            </div>
            <div className = "screen3">
              <Route path="/topics" component={QuestionBox}/>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
