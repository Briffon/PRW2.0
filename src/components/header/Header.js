import React from 'react';
import './Header.css';

const Header =props=>{
    return(
        <header className="header" style={styles.container}>
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
        backgroundColor:'#00E87F',
        color:'white',
        fontSize:'1.5em',
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
        marginLeft:'2rem',
        
    },
    logo:{
        margin:'auto',
    }
}