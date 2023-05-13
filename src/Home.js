import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Firebase Authentication</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
    </ul>
    
    
     </div>
  </div>
</nav>




<div class="background">
        
    <form>
        <div className="btn">
            <button>
              <Link to="/Login" style={{textDecoration:'none', color:'black'}}>Login</Link>
              
               
               </button><br></br>
            <button>
                <Link to="/Signup" style={{textDecoration:'none', color:'black'}}>Signup</Link>
            </button>
        </div>
        
    </form>

</div>

</div>

    
  )
}

export default Home