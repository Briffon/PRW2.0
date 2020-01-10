import React from 'react'

const Header =props=>{
    return(
        <header style={styles.container}>
            <img width="300px" height="100px" src={require('../../images/logo/PNG/CCG.png')} alt="logo"/>
            <h1>CCG Admin</h1>
        </header>
    )
}

export default Header;

const styles={
    container:{
        display:'flex',
        backgroundColor:'gray',
        color:'white',
        fontSize:'1.5em',
        textTransform:'uppercase',
        width:'100%'
    }
}