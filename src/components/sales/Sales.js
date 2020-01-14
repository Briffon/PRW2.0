import React, { Component} from 'react';
import Card from '../card/Card';

class Sales extends Component{
    state={
        cards:[],
        isLoaded:true,
    }

    componentDidMount(){
        const isLoaded = this.state.isLoaded;
        
        if(isLoaded){
            this.load();
        }else{
            console.log("error");
        }
    }
    
    async load(){
         await this.randomCards()
        .then(array=>array.map(card=>({
            name:`${card.name}`,
            price:`${card.price}`,
            img:`${card.image_uris.small}`,
        }))).then(cards=>this.setState({
            cards,isLoaded:false
        })).catch(err=>{
            console.log(err);
        })
    }

    async randomCards(){
        return Promise.all([this.random(), this.random(), this.random(),this.random()]).then(array=>{

            array.forEach(card=>{
                let price = 0.01+Math.floor(Math.random()*(100-0.01));
                card.price=price;
            })
            return array;
        })
    }

    async random(){
        return await fetch(`https://api.scryfall.com/cards/random`).then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error(res);
        }).then(card=>{
            return card;
        })
    }

    render(){
        const{isLoaded,cards} =this.state;
        return(
            <div className="content">
                 <h2>Sales</h2>
                {!isLoaded&&cards.length>0 ? cards.map(card=>{
                    const{name,price,img}=card;
                    return <Card name={name} img={img} price={price} />
                }):null}
            </div>
        )
    }
}

export default Sales;