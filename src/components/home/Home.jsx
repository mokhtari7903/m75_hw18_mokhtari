import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Header from './Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import Product from '../Product/Product';
function Home(props) {
    const [page, setPage] = useState("home"); 
    const [product, setProduct] = useState("")
    const [cartArray, setCartArray] = useState([])
    useEffect(() => {
        localStorage.setItem("shopingCart", JSON.stringify(cartArray))
    }, [cartArray])
    const changePage = (page) => {
       setPage(page) 
    }
    const getProduct = (objProduct) => {
        setProduct(objProduct)
        
    }
    const backHome = () => {
        setProduct("")
    }

    const changeNumber = (id, mul ) => {
        
        
            console.log(mul)
            setCartArray(prev => prev.map((obj) => obj.id === id ? {...obj, number:obj.number < obj.stock || mul<0  ? obj.number +mul:obj.number}:obj))
            setCartArray(prev => prev.filter((obj) => obj.number !== 0 ))
        
}

    const getObjProduct = (product) => {
        
        let objProduct = props.data.find(obj => obj.id === product.id)
        objProduct = { ...objProduct, number: product.number}
        if(+product.number > 0 && +product.number <= +objProduct.stock){
            
            setCartArray(prev => {
                const isExist = prev.find((obj ) => obj.id === product.id);
                
                if(isExist === undefined){
                   
                    return [...prev,objProduct]
                }else{
                    
                    return prev.map(obj => obj.id === product.id? objProduct: obj)
                }
                    

            })
        }
        
    }
    
    return ( 
        <>
        {product !== "" && <Product product={product}
        backHome={backHome}
        getObjProduct={getObjProduct} /> }
        <Header page={page} setPage={changePage}/>
        {page === "home" && <Wrapper cards={props.data} getCard={getProduct}/>}
        {page === "cards" && <Cards cards={cartArray} setNumber={changeNumber}/>}
        <Footer setPage={changePage}/>
        </>
     );
}

export default Home;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Outlet, Link,} from "react-router-dom"
// function Home() {
//     return (  
//         <>
//         <h2>page Home</h2>
//         <Link to={"Home/Login"}>Login</Link>
//         <Link to={"Home/Register"}>Register</Link>
//         <Link to={"Home/User"}>User</Link>
//         <Outlet/>
//         </>
//     );
// }

// export default Home;


// ReactDOM.render ( 
//         <>
//         <Routes>
                    
//             <Router path="/Home" element={<Home/>}/>
                
//                 <Router path="/login" element={<Login/>}/>
//                 <Router path="/Register" element={<Register/>}/>
//                 <Router path="/User" element={<User/>}/>
//             <Router/>
                
//         </Routes>
//         </>,
//         document.getElementById("root")
//      );


// export default myApp;