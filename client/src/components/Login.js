import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const handleClick=()=>{
        alert(email);
        axios.post('/api/login',{email:email,password:password})
        .then((res)=>{
            const authToken = res.data;
            console.log(authToken);
            localStorage.setItem('authToken', authToken);
            navigate('/Main');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div>
            <div className='container1'>
                <div className='login-container'>
                    <div className='login1'>
                        <div className='login-header'>
                            <div className='lh1'>Welcome!</div>
                            <div className='lh2'>Log in with your account to continue</div>
                            <div className='lh3'>Continue with Google</div>
                        </div>
                        <div className='login-body'>
                            <div className='lb1'>
                                <div className='lb2'>Email Address</div>
                                <input className='lb3' onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                            <div className='lb1'>
                                <div className='lb2'>Password</div>
                                <input className='lb3' onChange={(e)=>setpassword(e.target.value)}/>
                            </div>
                        </div>

                        <div className='ctn-btn' onClick={handleClick}>Continue</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;