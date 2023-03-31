import React from 'react';

import './App.css';
import {
  Route, Routes,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import SignUp from './components/LoginPage/SignUp';
import SignIn from './components/LoginPage/signin';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
   
    <Routes>
      <Route  path="/" element={<Home/>}></Route> 
      <Route path="/signin" element={ <SignIn/>}>
         </Route>
          
           <Route path="/signup" element={ <SignUp/>}>
           
          </Route>
          <Route path="/appoinment" element={ <Appoinment/>}>
            
          </Route>
          <Route path="/dashboard/appoinment" element={ <Dashboard/>}>
            
          </Route>
 
     </Routes>
  );
}

export default App;
