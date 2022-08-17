import React, { useState } from "react";
import { auth, fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./loginStyle.scss";
export const Signup = () => {
  const history = useHistory();

  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(fullName, email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        console.log(credentials);
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            FullName: fullName,
            Email: email,
            Password: password,
          })
          .then(() => {
            setSuccessMsg(
              "Redirecting..."
            );
            setFullname("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              history.push("/");
            }, 3000);
          })
          .catch((error) => setErrorMsg(error.message));
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <>
      <div className="bod">
        <form
          action="javascript:void(0);"
          class="login-form"
          autoComplete="off"
          onSubmit={handleSignup}
        >
          {successMsg && (
            <>
              <div class="link">{successMsg}</div>
              <br></br>
            </>
          )}
          <h1>Sign up</h1>
          <div class="form-input-material">
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" "
              autocomplete="off"
              required
              class="form-control-material"
              onChange={(e) => setFullname(e.target.value)}
              value={fullName}
            />
            <label for="username">Username</label>
          </div>
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
            Sign in
          </button>
          <span>
          Already have an account Login
            <Link to="login" className="link">
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
