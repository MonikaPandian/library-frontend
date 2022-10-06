import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function (props) {
    const navigate = useNavigate();
    const [authMode, setAuthMode] = useState("signin")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ loginEmail, setLoginEmail ] = useState("")
    const [ loginPassword, setLoginPassword ] = useState("")
    const [ name, setName] = useState("")  
    const [token, setToken] = useState("") 

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In
                        </h3>
                        <div className="text-center">
                            Not registered yet?{""}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email Address</label>
                            <input type="email" value={loginEmail} onChange={(event) => setLoginEmail(event.target.value)} className="form-control mt-1" placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} className="form-control mt-1" placeholder="Enter password" autoComplete="on" />
                        </div>
                        
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={()=>{ 
                                const member = {
                                    email: loginEmail,
                                    password: loginPassword
                                }                             
                                fetch("https://library-management1234.herokuapp.com/members/login", {
                                    method: "POST",
                                    body: JSON.stringify(member),
                                    headers: {
                                        "Content-Type": "application/json",
                                    }
                                })
                                    .then((data) => data.json())
                                    .then((res)=>{                                    
                                        if(res.message === "Successful login"){                                                                                  
                                            navigate("/dashboard")
                                        }
                                        else{
                                            window.alert("Please check your username and password")
                                        }
                                    }); 
                            }}>
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            <a href="#">Forgot password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input type="text" onChange={(event) => setName(event.target.value)} className="form-control mt-1" placeholder="e.g Jane Doe"/>                        
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control mt-1" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control mt-1" placeholder="Enter password" autoComplete="on"/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={()=>{ 
                                const newMember = {
                                    name: name,
                                    email: email,
                                    password: password
                                }             
                                console.log(newMember);                
                                fetch("https://library-management1234.herokuapp.com/members/signup", {
                                    method: "POST",
                                    body: JSON.stringify(newMember),
                                    headers: {
                                        "Content-Type": "application/json",
                                    }
                                })
                                    .then((data) => data.json())
                                    .then((res)=>{ console.log(res)                                 
                                        if(res.acknowledged === true){    
                                            window.alert("Account created successfully")                                        
                                           changeAuthMode()
                                        }
                                        else if( res.message === "Username already taken"){
                                            window.alert("Username already taken")
                                        }
                                        else if( res.message === "Password pattern does not match"){
                                            window.alert("password should contain atleast one uppercase, lowercase, numbers, and symbols")
                                        }
                                    }); 
                            }}>                              
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        <a href="#">Forgot password?</a>
                    </p>
                </div>

            </form>
        </div>
    )
}

