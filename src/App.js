import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Home from "./components/home/Home";
import data from "./data.json"




 function App() {
  
  // const DATA_BASE_URL = "https://62a56925b9b74f766a39306d.mockapi.io/api/ex2/cards";
  // let result = "*";
  //  const getData = async (url) => {
  //   await fetch(url).then(res => res.json()).then((data) => {result = data;}).catch((e) => {console.log("fetch error: =>",e);})
     
  //  }
  //  useEffect(() => {
  //   console.log("effect");
  //    (async  () => {
  //     console.log("anonmos");
  //      await getData(DATA_BASE_URL)
  //      localStorage.setItem("data", JSON.stringify(result))
      
  //    } )()

  //  },[])
  
 
    return ( 
      <>
      {/* in the name of god */}
    
      <Home data={data.list}/>

      </>
      
     );
  }

 
export default App;