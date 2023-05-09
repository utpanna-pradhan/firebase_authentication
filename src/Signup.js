import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './Signup.css';
import app from "./firebase";
import { useState } from "react";
import { Link } from 'react-router-dom';


function Signup() {
    const auth = getAuth(app);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  
  const signUp = () =>{
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Sucessfully Created an Account");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode);
    //const errorMessage = error.message;
    // ..
  });

  }




    
  return (
    <div className='container2'>
        <h3>Signup</h3>
        <h6>Create an account</h6>


        <label>Name   : </label>
        <input type ={"text"} placeholder ="enter your name" />

        <label>Email   : </label>
        <input type ={"email"} placeholder ="enter your email" 
        onChange={(e) => setEmail(e.target.value)} />



        <label>Password : </label>
        <input type ={"password"} placeholder ="enter your password"
        onChange={(e) => setPassword(e.target.value)} />

        <button onClick={signUp}>Signup</button>

        <div className="main">
           
              
            
              <button className='btnlogin'><Link to="/Login" 
                      style={{textDecoration:'none' ,color:'black'}}>Login</Link></button>
            
        </div>

        <div className="back" style={{paddingLeft:'150px',paddingTop:'20px'}}>back to  <Link to='/'>Home</Link> page</div>
       

    </div>

    
  )
}

export default Signup