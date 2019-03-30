import React, { Component } from 'react';
import TagEditor from './TagEditor';

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

class QuestionBox extends Component {

    constructor(props){
        super(props);
        this.state =  { question: "How are you feeling?" } ;
      }

    render() {
        return(
            <div className = "question" style={questionBoxStyle}>
                <div className = "s">
                    <div>
                        {this.state.question}
                    </div>
                </div>
                <div className = "tagEditor">
                    <TagEditor/>
                </div>
                <div className ="nextButton">
                    <button> Connect </button>
                </div>
            </div>
        );
    }

}
export default QuestionBox;