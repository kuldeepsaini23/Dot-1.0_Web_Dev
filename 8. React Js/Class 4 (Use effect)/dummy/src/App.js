import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [text, settext] = useState('');
  const [name, setname] = useState('');

  //! variation-1 Every render
  // useEffect(() => {
  //   console.log('useEffect is running');  
    
  // });

  
      useEffect(() => {
    console.log('useEffect is running');  
    
  }, []);

    //! variation-3 First render and when dependency changes
  //   useEffect(() => {
  //   console.log('useEffect is running');  
    
  // }, [text]);
  //  useEffect(() => {
  //   console.log('useEffect is running');  
    
  // }, [name]);
  
  
    //! variation-4 TO Handle unmounting of a component 
  useEffect(() => {
   //*add event listener
   console.log("Listener added");

      //*Remove event listener
    return () => {
      console.log("Listener removed");
    }
    
  }, [text]);

  function changeHandler(event){
    settext(event.target.value);
    setTimeout (()=>{ console.log(text);},1000);
   
  }

  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
