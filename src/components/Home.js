import React, { Component } from 'react';
import { Link } from "react-router-dom";

// It will be tag

const questionBoxStyle = {
    margin: '40px',
    border: '5px solid pink',
    background: 'lightblue'
};

const tagEditorStyle = {

};

const buttonStyle = {

};

class Home extends Component {

    constructor(props){
        super(props);
        this.state =  { question: "Are you helper or look out for help" } ;
      }

    render() {
        return(
            <div className = "question" style={questionBoxStyle}>
                <div className = "s">
                    <div>
                        {this.state.question}
                    </div>
                </div>
                <span className="input-group-btn">
                <Link to="/expert"> Expert </Link>
                
                </span>
                <br/>
                <span className="input-group-btn">
                <Link to="/topics"> Need Help </Link>
                </span>
            </div>
        );
    }

}
export default Home;


