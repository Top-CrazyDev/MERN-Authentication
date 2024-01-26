import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[secpassword,setsecpassword]=useState("");
    const handleclick= async()=>{
        if(password===secpassword){
            // const res=await fetch('http://127.0.0.1:8080/signup',{
            //     method:'POST',
            //     body:JSON.stringify({
            //         email,
            //         password
            //     })
            // })
            // if(res.ok){
            //     navigate('/Login');
            // }
            // else{
            //     alert('failed');
            // }
            axios.post('/api/signup',{email:email,password:password})
            .then((res)=>{
                console.log(res.data);
                navigate('/Login');
            }).catch((err)=>{
                console.log(err);
            })
        }
            
    }
    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="signup-form">
                    <div className="signup-header">
                        sign up
                    </div>
                    <div className="user-infor-box">
                        <div className="cwg">
                            <div className="txt">Continue with Google</div>
                        </div>
                        <div className="user-infor-each">
                            <label className="font">Email</label>
                            <input name='email'  onChange={(e)=>setemail(e.target.value)}></input>
                        </div>
                        <div className="user-infor-each">
                            <label className="font">Password</label>
                            <input type="password" name='password'  onChange={(e)=>setpassword(e.target.value)}></input>
                        </div>
                        <div className="user-infor-each">
                            <label className="font">Re-enter the Password</label>
                            <input type="password" name='secpassword'  onChange={(e)=>setsecpassword(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="user-secur-box">
                        <input placeholder="First Name"/>
                        <input placeholder="Last Name"/>
                    </div>
                    <div className="con-btn" onClick={handleclick}>Continue</div>
                    <div className="already-have-account">
                        <p className="lasttext">Already have ann account? <Link to='/login'>Log In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;