import React, { Component } from 'react';
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
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        {/* <QuestionBox/> */}
        <div >
            <AppBar/>
            <div className = "screen1" style = {screen1Style}>
            </div>
            <div className = "screen2" style = {screen2Style}>
            </div>
            <div className = "screen3">
            </div>
        </div>
      </div>
    );
  }
}

export default App;
