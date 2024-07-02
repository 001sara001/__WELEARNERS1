import React from 'react';
import { IoCloseOutline, IoPersonOutline, IoCalendarOutline, IoCallOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';

export const Register = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
    <div className="wrapper">
        <div className="Register-box" id="register-box">
            <form action="">
                <h2>Register</h2>
                <span className="icon-close" id="register-close">
                    <IoCloseOutline />
                </span>

                <div className="input-box">
                    <span className="icon"><IoPersonOutline /></span>
                    <input type="fullname" required/>
                    <label>UserName</label>
                </div>
                <div className="input-box">
                    <span className="icon"><IoCalendarOutline /></span>
                    <input type="birthdate" required/>
                    <label>Birth Date</label>
                </div>
                <div className="input-box">
                    <span className="icon"><IoCallOutline /></span>
                    <input type="PhonrNumber" required/>
                    <label>Phone Number</label>
                </div>
                <div className="input-box">
                    <span className="icon"><IoMailOutline /></span>
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><IoLockClosedOutline /></span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>I agree to the terms & Conditions</label>
                </div>
                <button type="submit">Register</button>
                <div className="login-link">
                    <p> Already have an account?<a href="#" id="login">LogIn</a></p>
                </div>
            </form>
        </div>
    </div>
    </div>
  );
};