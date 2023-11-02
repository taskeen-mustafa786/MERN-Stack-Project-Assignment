import React from 'react';
import {useState} from 'react';
import './style.css';

export default function App() 
{
  // const {userName,setUserName} = useState();
  //  const {pass,setPass} = useState();

  // var userName = "taskeen";
  // var password = "pass";

  // tempPass;

  // function check()
  // { 

     
  //   if(uName == userName && tempPass == password)
  //   {
  //     return(
  //      <HomePage></HomePage>
  //     )

      
  //   }
  // }

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
