import React from "react";
import Addimg from "../images/addimg.png"

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">SM Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input style={{display:"none"}} type="file" />
          <label htmlFor='file'>
            <img src={Addimg} alt=""/>
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
