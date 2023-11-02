import React from 'react';
import './style.css';

export default function App() 
{
  // const {pass,setPass}
  // function 
  function LoginPage()
  {
    return(
      <div className ="login" >
        <input type="text" class = "field" placeholder = "username" required autofocus></input>
        <input type="password" class = "pass" placeholder = "password" min = "4" max = "8" required autofocus></input>
        <button className = "input" >Login </button>
      </div>
    )
  }
  return (
    <div>
     <LoginPage></LoginPage>
    </div>
  );
}
