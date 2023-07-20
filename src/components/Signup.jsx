import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials,setCredentials]=useState({name : "", email : "", password : "", cpassword : ""});

    let navigate = useNavigate();
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        const {name, email, password,cpassword} = credentials;

        if (password !== cpassword) {
            props.showAlert('Passwords do not match', 'danger');
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
        });
        const json=await response.json();
        console.log(json);

        if(json.success)
        {
            localStorage.setItem('token' , json.authToken);
            navigate("/");
            console.log("Account created successfully");
            props.showAlert("Account Created Successfully","success");
        }
        else
        {
            props.showAlert("Invalid Credentials","danger");
        }
         
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };


  return (
    <div>
      <h2 className='text-light' style={{fontFamily: 'times new roman'}}>Signup to continue to NotesCloud</h2>
      <form style={{border: '1px solid white'}} className='text-light my-3 mb-4' onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3  mx-5">Name</label>
            <input type="text" className="form-control bg-dark text-light mb-4 mx-5" id="name" name='name' placeholder='Type the Name' onChange={onChange} style={{width: '90%'}} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label  mx-5">Email address</label>
            <input type="email" className="form-control bg-dark text-light  mx-5" id="email" name='email' aria-describedby="emailHelp" placeholder='Type the Email' onChange={onChange} style={{width: '90%'}} required/>
            <div id="emailHelp" className="form-text mx-5 mb-4">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label  mx-5">Password</label>
            <input type="password" id='password' name='password' className="form-control bg-dark text-light  mx-5 mb-4" placeholder='Type the Password (Minimum 5 characters)' onChange={onChange} style={{width: '90%'}} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label  mx-5">Confirm Password</label>
            <input type="password" id='cpassword' name='cpassword' className="form-control bg-dark text-light  mx-5 mb-4" placeholder='Confirms the Password' onChange={onChange} style={{width: '90%'}} required/>
        </div>
        <div className='mt-3 mb-3'>
            <button type="submit " className="btn btn-primary mx-5" >Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Signup
