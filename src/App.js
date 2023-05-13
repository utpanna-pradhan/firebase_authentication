import React from 'react';
import './App.css';
 import Home from './Home';
 import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
 
 function App() {
   return (
     <div>
      
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