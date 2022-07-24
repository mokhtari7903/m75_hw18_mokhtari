import React from 'react';
import style from "./Card.module.css"
function Card(props) {
    return ( 
        <div className={style.card} onClick={() => {props.setCard();}}>
            <img src={props.imgSource} alt={"img"} />
            <div>
                <p>{props.name}</p>
                <p>${props.price}</p>
            </div>
        </div>
     );
}

export default Card;