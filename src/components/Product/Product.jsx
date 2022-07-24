import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import style from "./Product.module.css"


function Product({product, backHome, getObjProduct}) {
    const [number, setNumber] = useState(0);
   
    // useEffect(() => {
    //     getObjProduct(objProduct)

    // }, [objProduct])
    useEffect(() => {
       
        getObjProduct({id:product.id, number:number})
    }, [number])
    const multiplier = () => {
        setNumber(num => num < product.stock? num + 1:num)
    }
    return ReactDOM.createPortal( 
        <>
        <div className={style.page}>
            <div className={style.back} onClick={() => {backHome()}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
        <img src={product.image} alt="" />
        <div>
            <p>{product.name}</p>
            <p>${product.price}</p>
        </div>
        <div>
        <p>{product.description}</p>
        </div>
                <div>stock: {product.stock}</div>
        <div className={style.fotter}>
            <button className={style.btn} onClick={multiplier} >Buy Now</button>
            <div className={style.shop}>
                { number === 0 ?null : <div>
                    {number}
                </div> }
                <svg width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>
        </div>
        </div>
        </>,
        document.getElementById("modal")
     );
}

export default Product;