import React from 'react';
import '../Styles/NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }
    render (){return (<div className="NavBar">
        <ul className="nav">
            <img src={require("../img/house.png")} alt="weird house"/>
            <Link className="item" to='/'>View properties</Link>
            <Link className="item" to='/add-property'>Add a property</Link>
        </ul>
    </div>)}
} 

export default NavBar;
