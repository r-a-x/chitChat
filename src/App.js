import React, { Component } from 'react';
import TagEditor from './components/TagEditor';
import QuestionBox from './components/QuestionBox';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={TagEditor} />
          <Route path="/topics" component={QuestionBox} />
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <TagEditor/> */}
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
