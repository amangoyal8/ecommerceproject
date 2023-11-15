import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
    const navi = useNavigate()
    const [name, setname] = useState("")
    const login = (e) => {
        e.preventDefault()
        setname(e.target.value)

        if (setname < 2) {
            toast.error("Please enter your right name....")
        }
    }
    const lgsuccess = () => {
        if (name === 'aman') {
            toast.success("Login success....")
            setTimeout(() => {
                navi("/home")
            }, 4000);
        }
        else {
            toast.error("unsuccessful....")
        }

    }

    return (
        <>
            <ToastContainer />
            <div className="login-main">
                <div className="login-text">
                    <h1>Login</h1>
                    <h2>Don't have any account? <span className="spanh2"> Create Account  </span></h2>
                    <div className="username">
                        <span><i className="fa-solid fa-user"></i></span>
                        <input onChange={login} type="text" placeholder="Username" />
                        <span><i className="fa-solid fa-circle-check"></i>  </span>
                    </div>
                    <div className="password">
                        <span><i className="fa-solid fa-lock"></i></span>
                        <input type="password" placeholder="Password" />
                        <span><i className="fa-solid fa-eye-slash"></i></span>
                    </div>
                    <div className="forgot">
                        <Link to="#">Forgot password?</Link>
                        <br />
                        <Link to="#">Signup</Link>
                    </div>
                    <div className="lg-btn">
                        <button onClick={lgsuccess}><i className="fa-solid fa-arrow-right-from-bracket"></i>Login</button>
                    </div>
                    <h3 className="with">Login with</h3>
                    <div className="lg-with">

                        <div className="faceb">
                            <Link to="https://www.facebook.com/login"><i className="fa-brands fa-facebook"></i></Link>
                        </div>
                        <div className="google">
                            <Link to="https://www.google.co.in/"><i className="fa-brands fa-google"></i></Link>
                        </div>
                        <div className="twit">
                            <Link to="https://twitter.com/?lang=en-in"><i className="fa-brands fa-twitter"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Login }