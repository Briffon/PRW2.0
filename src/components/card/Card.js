import React from 'react';

const Card =props=>{
    return(
        <div>
            <p>{props.name}</p>
            <img src={props.img} alt={props.name}/>
            <p>{props.price}</p>
        </div>
    )
}

export default Card;