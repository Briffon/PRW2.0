import React from 'react';
import './NavigationLeft.css'
import { NavLink } from 'react-router-dom'

//THIS SHOULD BE NAV LINKS WITH NAV ELEMENT

const NavigationLeft=props=>{
    return(
        <nav style={styles.container} className="nav-container">
            <NavLink to="/Sales" style={styles.listItem}><img src={require("../../images/home.png")} width="25" alt="home icon"/>Sales</NavLink>
            <NavLink to="/Inventory" style={styles.listItem}> <img src={require("../../images/shelf.png")} width="25" alt="inventory icon" />Inventory</NavLink>
            <NavLink to="/Analyics" style={styles.listItem}><img src={require("../../images/analytics.png")} width="25" alt="analtyics icon" />Analytics</NavLink>
            <NavLink to="/SignIn" style={styles.listItem}><img src={require("../../images/analytics.png")} width="25" alt="analtyics icon" />Sign Out</NavLink>
        </nav>
    )
}

export default NavigationLeft;

const styles={
    container:{
        display: 'flex',
        flexDirection: 'column',
        width:'15%',
        backgroundColor:'#141414',
        color:'white',
    },
    list:{
        listStyle:'none',
    },
    listItem:{
        textDecoration:'none',
        underline:'none'
    }
}