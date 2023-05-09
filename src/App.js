
/*

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import app from "./firebase";
import { useState } from "react";



function App() {
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
    

const signIn = () =>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("User  has been sucessfully sign in");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    alert(errorCode);
  });

}




  return (
    <>
    <input type ={"email"} placeholder ="enter your email" 
        onChange={(e) => setEmail(e.target.value)} />

    <input type ={"password"} placeholder ="enter your password"
        onChange={(e) => setPassword(e.target.value)} />

    <button onClick={signUp}>Create Account</button>
    <button onClick={signIn}>Signin</button>
    
    </>
  );
}

export default App; */


 import './App.css';
 import Home from './Home';
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
 
 function App() {
   return (
     <div >
      
          <Router>
            <Routes> 
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/signup' element={<Signup />}></Route>
                
            </Routes>
        </Router>
     

     </div>
   )
 }
 
 export default App