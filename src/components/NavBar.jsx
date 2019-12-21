import React from 'react';
import '../Styles/NavBar.css'

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }
    render (){return (<div className="NavBar">
        <ul className="nav">
            <img src="../img/house.png" alt="weird house"/>
            <li className="item"><button type='button'>View properties</button></li>
            <li className="item"><button type='button'>Add a property</button></li>
        </ul>
    </div>)}
} 

export default NavBar;