import React from 'react';
import './NavigationLeft.css'
const NavigationLeft=props=>{
    return(
        <div style={styles.container} className="nav-container">
            <ul style={styles.list}>
                <li style={styles.listItem}><img src={require("../../images/home.png")} alt="home icon"/> <a href="google.com">Homepage</a></li>
                <li style={styles.listItem}> <img src={require("../../images/shelf.png")} alt="inventory icon" /><a href="google.com">Inventory</a></li>
                <li style={styles.listItem}><img src={require("../../images/analytics.png")} alt="analtyics icon" /><a href="google.com">Analytics</a></li>
            </ul>

        </div>
    )
}

export default NavigationLeft;

const styles={
    container:{
        width:'12%',
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