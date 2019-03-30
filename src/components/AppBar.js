import React, { Component } from 'react';
import Logo from './Logo';

class AppBar extends Component {

    constructor(props){
        super(props);
        this.state =  { display:props.display};
    }

    render() {
        return (
        <header className = "AppBar">
            <div className = "logo">
                <Logo/>
            </div>
            <div className = "">
                <ul className = "header">
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