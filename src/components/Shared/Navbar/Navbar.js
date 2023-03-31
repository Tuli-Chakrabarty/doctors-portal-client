import React from 'react';
import { Link, Navigate, redirect, Redirect, useNavigate, useRoutes } from 'react-router-dom';

const Navbar = () => {
  // const router =useRoutes()
  
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
   
    navigate(path);
  }
  
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <Link class="nav-link mr-5 active mr-5" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link mx-2" href="#">Link</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link mx-2"  href="#">About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-white" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-white" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 text-white" href="#">Contact Us</a>
        </li>
        <li><button onClick={()=>routeChange('signin')} className='btn-primary btn mx-2 '>Sign in</button></li>
        <li><button  onClick={()=>routeChange('signup')} className='btn-success btn mx-2 '>Sign Up</button></li>
        </ul>
         
    </div>
  </div>
</nav>
    );
};

export default Navbar;