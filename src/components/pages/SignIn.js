import React, { Component } from 'react';
import Header from '../header/Header';
import SignInModal from '../modals/SignInModal';

class SignIn extends Component{
    render(){
        return(
            <div style={styles.container}>
                <Header/>
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