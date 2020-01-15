import React, { Component } from 'react';
import Header from '../../header/Header';
//import SignInModal from '../modals/SignInModal';
import NavigationLeft from '../../nav/NavigationLeft';
import Hero from '../../hero/Hero';
import './SignIn.css'
//import Sales from '../sales/SalesList';

class SignIn extends Component{
    render(){
        return(
            <div style={styles.container}>
                <Header/>
                <div style={styles.innerContainer}>
                    <NavigationLeft />
                    <div style={styles.mainContent}>
                        <Hero style={styles.hero}/>
                        {/* <Sales/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;

const styles={
    container:{
        backgroundColor:'white',
        color:'black',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
    },
    modalCotainer:{
        height:'100vh',
        width:'100%',
        position:'relative',
    },
    innerContainer:{
        display:'flex',
        flexDirection:'row',
    },
    hero:{
        margin:'auto'
    }
}


// <div style={styles.modalCotainer}>
// <SignInModal/>