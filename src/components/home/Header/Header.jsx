import React from 'react';
import image from "../../../style/image/download (3).jpeg";
import icon from "../../../style/image/house.svg"
import style from "./Header.module.css"
function Header(props) {
   
    return ( 
        <>
        {/* header pro */}
        <div className={style.header}>
            <img src={icon} alt="" />
            {props.page === "home" && <div>
            <p>Lorem ipsum </p>
            <p>Lorem ipsum dolor.</p>
           
            </div> }
            {props.page === "cards" &&<p>Card</p>}
                
            <img src={image} alt="" />
        </div>
        {/* search box */}
        <div className={style.searchBox}>
        <svg width="16" height="16" fill="#bababa" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
            <input type="search" placeholder='Search...'/>
        </div>
        </>
     );
}

export default Header;