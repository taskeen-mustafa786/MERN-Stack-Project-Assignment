import React from "react"
import {useState} from "react"
import "./UserEntry.css"

export default function UserEntry()
{
  const [users,setUsers] = useState([]);
  const [person,setPerson] = useState({})

  return( 
        <div className = "container">
          <div className = "main">
          <h1>Registration</h1>
          <br/>
            <form action="" classNmae = "form" onSubmit = {(e)=> {
              e.preventDefault()
              }}>
              <h3>Username</h3>
              <input className = "input" type = "text" placeholder = "Username"  required/>
              <h3>Email</h3>
             <input className = "input" type = "text" placeholder = "E-mail"  required/>
             <h3>Password</h3>
             <input className = "input" type = "password" placeholder = "Password"  required/>
              <h3>Re-type Password</h3>
             <input className = "input" type = "password" placeholder = "Confirm Password"  required/>
             <h3>Gender</h3>
             <input className = "input" name = "gender" type = "radio" value = "male"  required/>Male<br/>
             <input className = "input"name = "gender" type = "radio" value ="female" required/> Female <br/>
             <input className = "input" name = "gender" type = "radio" value ="else" required/> Else<br/>
            <br/><input type="submit"/>         
          </form>
          </div>
         </div>
  )
}
