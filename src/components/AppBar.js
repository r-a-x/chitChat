import React, { Component } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const appBarStyle = {
    height: '50px',
    width: '100%',
    background: 'yellow'
};

const sectionListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    listStyleType: 'none',
    margin: 0
};

const sectionListItemStyle = {
    flexBasis: 'auto',
    margin: '10px',
    marginLeft: '40px',
    marginRight: '40px'
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
                    <li style = {sectionListItemStyle}>
                        <Link to="/about">About</Link>
                    </li>
                    <li style = {sectionListItemStyle}>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>
        </header>
        );
    }

};

export default AppBar;