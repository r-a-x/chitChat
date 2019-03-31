import React, { Component } from 'react';
import Logo from './Logo';

const appBarStyle = {
    height: '50px',
    width: '100%',
    background: 'yellow'
};

const sectionListStyle = {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'justify-content': 'flex-end',
    margin: 0
};

const sectionListItemStyle = {
    'flex-basis': ''
};
class AppBar extends Component {

    constructor(props){
        super(props);
        this.state =  { display:props.display};
    }

    render() {
        return (
        <header className = "AppBar" style ={appBarStyle}>
            <div className = "logo">
                <Logo/>
            </div>
            <div className = "sectionList">
                <ul className = "header" style = {sectionListStyle}>
                    <li>
                        <a href="about">About</a>
                    </li>
                    <li>
                        <a href="faq">FAQ</a>
                    </li>
                </ul>
            </div>
        </header>
        );
    }

};

export default AppBar;