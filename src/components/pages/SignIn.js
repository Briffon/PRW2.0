import React, { Component } from 'react';
import Header from '../header/Header';
import SignInModal from '../modals/SignInModal';
import NavigationLeft from '../nav/NavigationLeft';

class SignIn extends Component{
    render(){
        return(
            <div style={styles.container}>
                <Header/>
                <NavigationLeft/>
                <SignInModal/>
            </div>
        )
    }
}

export default SignIn;

const styles={
    container:{
        backgroundColor:'gray',
        color:'black',
        height:'100vh',
        poistion:'absloute',
    }
}