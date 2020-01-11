import React from 'react';
import './Header.css';

const Header =props=>{
    return(
        <header style={styles.container}>
            <div style={styles.logoContainer}>
                <img style={styles.logo}width="300px" height="100px" src={require('../../images/logo/PNG/CCG.png')} alt="logo"/>
                <h1> Admin</h1>
            </div>

            <form>
                <input placeholder="Search..."></input>
            </form>
        </header>
    )
}

export default Header;

const styles={
    container:{
        display:'flex',
        backgroundColor:'green',
        color:'white',
        fontSize:'1.5em',
        textTransform:'uppercase',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',
        margin:'auto'
    },
    logoContainer:{
        display:'flex',
        justifyContent:'flex-start',
        color:'black',
        
    },
    logo:{
        margin:'auto',
    }
}