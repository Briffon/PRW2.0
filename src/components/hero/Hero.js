import React from 'react';

const Hero =props=>{
    return(
        <div className="content">
            <img className='hero' style={{width:'90%'}} src={require('../../images/ccgholidarybanner.png')} alt="feauted content"></img>
        </div>
    )
}

export default Hero;

