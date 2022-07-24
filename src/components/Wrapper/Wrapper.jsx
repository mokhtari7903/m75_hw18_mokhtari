import React from 'react';
import Card from './Card/Card';
import style from "./Wrapper.module.css"
function Wrapper(props) {
    
    return ( 
        <>
        <div className={style.wrapper}>

       { props.cards.map((card) => {
           return <Card key={card.id}
            setCard={() => {props.getCard(card)}}
            imgSource={card.image}
            name={card.name}
            price={card.price}/> 
        })}
        </div>
       
        </>
     )
}

export default Wrapper;