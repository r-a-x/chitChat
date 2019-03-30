import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader

class Expert extends  Component {

    constructor(props){
        super(props);
        this.state = {'sad': false, 'happy': false, 'horny': false}
      }

    getInitialState() {
        return {checked: true}
      }

    handleCheck = (event) =>
        {
            console.log(event.value)
        this.setState({[event.name]: !this.state.val});
      };

      render() {
        return (
          <div>
            Happy
            <input type="checkbox" value="sad" onClick={this.handleCheck}/>
            Sad
            <input type="checkbox" value= "happy" onClick={this.handleCheck} />
            Horny
            <input type="checkbox" value= "horny" onClick={this.handleCheck} />
          </div>
        );
      }
}
  
export default Expert;