import React from 'react';
import style from "./Cards.module.css"


function Cards({cards, setNumber}) {
    return ( 
        <>
        <p>cards: ({cards.length})</p>
        

        {cards.map((card) => {
            return <div key={card.id} className={style.card}>
                <img src={card.image} alt="img" />

                <div className={style.title}>
                <p>{card.name}</p>
                <p><b>${card.price}</b></p>
                <p className={style.stock}>{card.stock}</p>
                </div>
                <div className={style.btnDiv}>

                <button className={style.btnD} onClick={() => {setNumber(card.id, -1)}}> - </button>
                <div><span>{card.number}</span></div>
                <button className={style.btnI} onClick={() => {setNumber(card.id, 1)}}> + </button>
                </div>
                    
            </div>
        })}
        
        </>
     );
}

export default Cards;