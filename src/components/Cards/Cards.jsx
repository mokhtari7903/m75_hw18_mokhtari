import React from 'react';
import style from "./Cards.module.css"


function Cards({cards, setNumber}) {
    return ( 
        <>
        <p>cards: ({cards.length})</p>
        

        {cards.map((card) => {
            return <div key={card.id} className={style.card}>
                <img src={card.image} alt="image" />

                <div >
                <p>{card.name}</p>
                <h3>${card.price}</h3>
                </div>
                <p>stock: {card.stock}</p>
                <div className={style.btnDiv}>

                <button onClick={() => {setNumber(card.id, 1)}}> + </button>
                <div>number: <span>{card.number}</span></div>
                <button onClick={() => {setNumber(card.id, -1)}}> - </button>
                </div>
                    
            </div>
        })}
        
        </>
     );
}

export default Cards;