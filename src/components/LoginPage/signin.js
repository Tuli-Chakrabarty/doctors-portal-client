import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
             <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-danger mt-5">Prisma Diagnostic Center</h2>
            <div class="text-center mb-5 text-danger"><b>Sign In</b></div>
            <div class="card my-5">
    
              <form class="card-body cardbody-color p-lg-5"onSubmit = {handleSubmit(onSubmit)}>
    
                <div class="text-center">
                  <img src='images/pic1.jpg' class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px" alt="profile"/>
                </div>
    
                <div class="mb-3">
                  <input type="text" class="form-control" id="Username" {... register("Username")} aria-describedby="emailHelp"
                    placeholder="User Name"/>
                
                   
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password"  {...register("password", { required: true })} placeholder="password"/>
              
                </div>
                <div class="text-center"><button type="submit" class="btn btn-info px-5 mb-5 w-100">Login</button></div>
                <div id="emailHelp" class="form-text text-center mb-5 text-light">Not
                  Registered? <Link to="/signup" class="text-danger fw-bold"> Create an
                    Account</Link>
                    
                </div>
              </form>
            </div>
    
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignIn;