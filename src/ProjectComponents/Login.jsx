// Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

const [user, setUser] = useState();
const [pass, setPass] = useState();

let nevigate = useNavigate();

function handleSubmit(){
  if(user ==="admin" && pass === "admin")
  {
    localStorage.setItem("username" , user);
    localStorage.setItem("password", pass);
    
    nevigate("/mainDashboard")
  }else{
    alert("Invalid Credential")
  }
}


  return (
    <div className='login'>
      
      <div className="container">
        <div className="row align-self-center">
          <div className="col-lg-6 align-self-center">
            
            <h1>The best offer<br></br><span>for your business</span></h1>
            </div>
          <div className="col-lg-6 align-self-center">
          <form>
  <div className="mb-3">
    <label className="form-label">Username</label>
    <input onChange={(e)=>setUser(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button onClick={(e)=>handleSubmit(e.target.value)} type="submit" className="btn btn-primary">Sign In</button>

  <div className="text-center"><p>or sign up with:</p>
  <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-facebook-f"></i></button>
  <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-google"></i></button>
  <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-twitter"></i></button>
  <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-github"></i></button>
  </div>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}