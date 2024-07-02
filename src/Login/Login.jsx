import React from 'react';
import { IoCloseOutline, IoPersonOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';
import './Login.css';

export const Login = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
    <div className="wrapper">
      <div className="login-box" id="login-box">
        <form action="">
          <h2>LogIn</h2>
          <span className="icon-close" id="login-close">
            <IoCloseOutline />
          </span>

          <div className="input-box">
            <span className="icon"><IoPersonOutline /></span>
            <input type="fullname" required />
            <label>UserName</label>
          </div>
          <div className="input-box">
            <span className="icon"><IoMailOutline /></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><IoLockClosedOutline /></span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don&apos;t have an account?<a href="#" id="go-register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};