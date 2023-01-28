import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
function SignIn() {
  const [state, setstate] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const submit = () => {
    axios
      .post("http://13.232.128.66:8080/gj-erp/auth/login", state)
      .then((res) => {
        localStorage.setItem("access_token", res.data.data.access_token);
        if (localStorage.getItem("access_token")) {
          navigate("/dashboard");
        }
      });
  };
  return (
    <div className="main">
      <div className="login_main">
        <div className="log_tab">
          <div className="head">
            <h2>Sign In</h2>
            <p>Log in to your account to continue</p>
          </div>
          <div className="input_login">
            <div className="field">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                placeholder="Email address"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div className="input_rem">
              <div className="check">
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <label style={{ color: "blue", fontSize: ".8rem" }} htmlFor="">
                Forgot Password?
              </label>
            </div>
          </div>
          <div className="sign_btn">
            <button className="btn" onClick={submit}>
              Sign In
            </button>
          </div>
          <p className="continue_sec">
            <span> OR CONTINUE WITH</span>
          </p>
          <div className="social_btn">
            <button>Google</button>
            <button>Facebook</button>
            <button>Twiiter</button>
          </div>
          <p style={{ textAlign: "center", color: "grey", fontSize: ".9rem" }}>
            Don&apos;t have an account?{" "}
            <span style={{ color: "blue" }}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
