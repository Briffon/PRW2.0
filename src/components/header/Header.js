import React from 'react'

const Header =props=>{
    return(
        <header style={styles.container}>
            <img src={require('../../images/Icon.png')} alt="logo"/>
            <h1>CCG Admin</h1>
        </header>
    )
}

export default Header;

const styles={
    container:{
        display:'flex',
        backgroundColor:'black',
        color:'white',
        fontSize:'1.5em',
        textTransform:'uppercase',
        position:'fixed',
        width:'100%'
    }
}