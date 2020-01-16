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
            <div className="right">
                <div className="user">
                        <p>{props.fullname}</p>
                        <img src={props.src} alt="user profile picture"/>
                </div>
            </div>
        </header>
    )
}

export default Header;

const styles={
    container:{
        display:'flex',
        flexDirection: 'row',
        backgroundColor:'#00E87F',
        color:'white',
        fontSize:'1.5em',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        
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