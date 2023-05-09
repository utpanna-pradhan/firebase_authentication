import React from 'react';
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';
import app from "./firebase";
import { useState } from "react";
import { Link } from 'react-router-dom';


function Login() {
const auth = getAuth(app);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  
  


  const signIn = () =>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    window.alert("HELLO WORLD");
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    alert(errorCode);
  });

}

    



  return (
    <div className='container'>
            <h3>Login</h3>
            <label>Email   : </label>
            <input type ={"email"} placeholder ="enter your email" 
              onChange={(e) => setEmail(e.target.value)} /> <br></br>

            <label>Password : </label>
            <input type ={"password"} placeholder ="enter your password"
               onChange={(e) => setPassword(e.target.value)} /><br></br>
      
        

       
        <button onClick={signIn} >Login</button>
         <hr></hr>
        <div className="main">
           
              <label>Create Account :</label>
            
              <button className='btnsignup'><Link to="/Signup" 
                      style={{textDecoration:'none' ,color:'black'}}>Signup</Link></button>
            
        </div>
        <div className="back" style={{paddingLeft:'150px',paddingTop:'20px'}}>back to  <Link to='/'>Home</Link> page</div>
        
       

       
       
    </div>
  )
}

export default Login   