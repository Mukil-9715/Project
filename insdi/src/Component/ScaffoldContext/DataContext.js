import React, { createContext, useEffect, useState } from 'react'


const AllDataScaffoldContext = createContext();

export function ScaffoldDataProvider  ({children}){

  const [cartitems, setcartitems] = useState({})
  let [scaffold , setScaffold ] = useState([])
  const [postResponse, setpostResponse] = useState([]);
  const [searchvalue, setsearchvalue] = useState([])

  useEffect   (() => {
    function getData() {
      fetch("http://localhost:3000/CardDetails")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setScaffold(message);
        });
    }
    getData();
  }, []);


  

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setpostResponse(message);
        });
    }
    getData();
  }, []);

  return (
    <AllDataScaffoldContext.Provider value={{searchvalue, setsearchvalue, postResponse,scaffold , setScaffold,cartitems, setcartitems }}>
      {children}
    </AllDataScaffoldContext.Provider>
  );
}

export default AllDataScaffoldContext;
