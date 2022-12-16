import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={() => navigate("/sign-in")}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input type="text" onChange={(event) => setName(event.target.value)} className="form-control mt-1" placeholder="e.g Jane Doe" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control mt-1" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control mt-1" placeholder="Enter password" autoComplete="on" />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault();
                            const newMember = {
                                name: name,
                                email: email,
                                password: password
                            }
                            console.log(newMember);
                            fetch("https://library-mgmt-backend.vercel.app/members/signup", {
                                method: "POST",
                                body: JSON.stringify(newMember),
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            })
                                .then((data) => data.json())
                                .then((res) => {
                                    console.log(res)
                                    if (res.acknowledged === true) {
                                        window.alert("Account created successfully. Please login to continue")                                       
                                        navigate("/sign-in")
                                    }
                                    else if (res.message === "Username already taken") {
                                        window.alert("Username already taken")
                                    }
                                    else if (res.message === "Password pattern does not match") {
                                        window.alert("password should contain atleast one uppercase, lowercase, numbers, and symbols")
                                    }
                                });
                        }}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp

