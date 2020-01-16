import React, { Component} from 'react';
import Header from '../../header/Header';
import NavigationLeft from '../../nav/NavigationLeft';
import Card from '../../card/Card';
import Hero from '../../hero/Hero';

class Sales extends Component{
    state={
        cards:[],
        isLoaded:true,
        item:[],
        isLoadedItem:true,
    }

    componentDidMount(){
        const isLoaded = this.state.isLoaded;
        const isLoadedItem=this.state.isLoadedItem;

        if(isLoaded){
            this.load();
        }else{
            console.log("error");
        }

        if(isLoadedItem){
            this.randomUser();
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

    randomUser(){
        fetch('https://randomuser.me/api/')
        .then(res=>{
            if(res.ok){
                return res.json();
            }
            throw Error(res);
        })
        .then(data=>data.results.map(user=>({
            fname:`${user.name.first} ${user.name.last}`,
            lname:`${user.name.last}`,
            picture:`${user.picture.large}`,
        })))
        .then(item=>this.setState({
            item,
            isLoadedItem:false,
        }))
        .catch(err=>console.log("Did not load ", err))
    }

    render(){
        const{isLoaded,cards,isLoadedItem,item} =this.state;
        return(
            <div style={styles.container}>
                {!isLoadedItem&&item.length>0 ? item.map(item=>{
                                const{fname,lname,picture}=item;
                                return <Header fullname={fname+" "+lname} src={picture}/>
                            }):null}
                <div style={styles.innerContainer}>
                    <NavigationLeft />
                    <div style={styles.mainContent}>
                        <div><Hero style={styles.hero} /></div>
                        <h2>Sales</h2>
                        <div style={styles.cardList}>
                           {/* Here */}
                            {!isLoaded&&cards.length>0 ? cards.map(card=>{
                                const{name,price,img}=card;
                                return <Card name={name} img={img} price={price} />
                            }):null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sales;


const styles={
    container:{
        backgroundColor:'whitesmoke',
        color:'black',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
    },
    innerContainer:{
        display:'flex',
        flexDirection:'row',
        height: '100vh'
    },
    hero:{
        display: 'flex',
        width:'90%',
        margin:'auto'
    },
    mainContent:{
        display: 'flex',
        flexDirection: 'column',
        padding: '2%'
    },
    cardList: {
        display: 'flex',
        flexDirection: 'row',
        //overflow: 'scroll'
    }
}