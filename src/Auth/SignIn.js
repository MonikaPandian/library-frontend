import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();   
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In
                    </h3>
                    <div className="text-center">
                        Not registered yet?{""}
                        <span className="link-primary" onClick={()=>navigate("/sign-up")}>
                            Sign Up
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control mt-1" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control mt-1" placeholder="Enter password" autoComplete="on" />
                    </div>
                    
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={(e)=>{ 
                            e.preventDefault();
                            const member = {
                                email: email,
                                password: password
                            }                             
                            fetch("https://library-mgmt-backend.vercel.app/members/login", {
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

export default SignIn
