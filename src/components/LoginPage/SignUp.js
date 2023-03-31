import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
//import { Link } from 'react-router-dom';

const SignUp = () => {
  
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorPassword,setErrorPassword]=useState();
  const onSubmit = data => {
   if(data.password!==data.confirm_password){
    setErrorPassword("Password does not match")
   }
   else {
    console.log("everything is ok",data);
    // localhost:4200
    fetch("http://localhost:4200/addUser",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
    },
      body:
    JSON.stringify(data)
      
    })

    
    setErrorPassword();
   }

  };
    return (
        <div>
               <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-danger mt-5">Prisma Diagnostic Center</h2>
            <div className="text-center mb-5 text-danger"><b>Sign Up</b></div>
            <div className="card my-5">
    
              <form  className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit(onSubmit)}>
    
                <div className="text-center">
                  <img src='images/pic2.jpg' className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px" alt="profile"/>
                </div>
    
                <div className="mb-3">
                  <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                    placeholder="User Name"  {...register("username",{ required: true })}/>
                    {errors.username && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                    placeholder="Email"  {...register("email")}/>
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control" id="contact_number" aria-describedby="emailHelp"
                    placeholder="contact number"  {...register("contact_number")}/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" placeholder="password"  {...register("password")}/>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="confirm_password" placeholder="confirm password"  {...register("confirm_password")}/>
                </div>
                {errorPassword?.length>0 && <span className='text-danger'>{errorPassword}</span>}

                
                 
            
                <div className="text-center"><button type="submit" className="btn btn-info px-5 mb-5 w-100">SignUp</button></div>
                
               
              </form>
            </div>
    
          </div>
        </div>
      
      </div>
            
            
        </div>
    );
};
export default SignUp;



