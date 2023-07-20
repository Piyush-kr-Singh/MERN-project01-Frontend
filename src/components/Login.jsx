import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials,setCredentials]=useState({email : "", password : ""});
    let navigate = useNavigate();


    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            //   "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMzhkZDJiMzhlYTBiNTZlZmZiMDk2In0sImlhdCI6MTY4OTQ5MjEwNX0.C6HViqyjzc01ZIXo4LXQtBUDMDc4C8LW2YYmGQUB-CM"
            },
            body: JSON.stringify({email: credentials.email,password : credentials.password})
        });
        const json=await response.json();
        console.log(json);
        if(json.success)
        {
            //Save the auth-token and redirect 
            localStorage.setItem('token' , json.authToken);
            navigate("/");
            props.showAlert("Successfully Logged-In","success");
        }
        else
        {
            props.showAlert("Wrong Password for this Email. Please try again!!", "warning");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

  return (
    <div >
      <h2 className='text-light mt-2' style={{fontFamily: 'times new roman'}}>Login to continue to NotesCloud</h2>
      <form style={{border: '1px solid white'}} className='text-light my-3' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label mx-5 mt-3">Email address</label>
            <input type="email" className="form-control bg-dark text-light mx-5" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} style={{width: '90%'}}/>
            <div id="emailHelp" className="form-text mx-5">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label mx-5">Password</label>
            <input type="password" value={credentials.password} id='password' name='password' className="form-control bg-dark text-light mx-5 mb-4" onChange={onChange} style={{width: '90%'}}/>
        </div>
        <button type="submit" className="btn btn-primary mx-5 mb-3" >Submit</button>
        </form>
    </div>
  )
}

export default Login
