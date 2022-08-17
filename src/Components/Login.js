import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config";
import { useHistory } from "react-router-dom";
import "./loginStyle.scss";
export const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg("Redirecting....");
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          history.push("/");
        }, 3000);
      })
      .catch((error) => setErrorMsg(error.message));
  };

  return (
    <>
      <div className="bod">
        <form
          action="javascript:void(0);"
          class="login-form"
          autoComplete="off"
          onSubmit={handleLogin}
        >
          {successMsg && (
            <>
              <div class="link">{successMsg}</div>
              <br></br>
            </>
          )}
          <h1>Login</h1>
          <div class="form-input-material">
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" "
              autocomplete="off"
              required
              class="form-control-material"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label for="username">Email</label>
          </div>
          <div class="form-input-material">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autocomplete="off"
              required
              class="form-control-material"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label for="password">Password</label>
          </div>

          <button type="submit" class="btn btn-ghost">
            Login
          </button>
          <span>
            Don't have an account SignUp
            <Link to="signup" className="link">
              {" "}
              Here
            </Link>
          </span>
        </form>
        {errorMsg && (
          <>
            <br></br>
            <div className="error-msg">{errorMsg}</div>
          </>
        )}
      </div>
    </>
  );
};
