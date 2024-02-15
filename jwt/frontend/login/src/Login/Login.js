import React, { useState } from "react";
import "./Login.css";
import Home from "../components/Home/Home";
function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSecessful, setLoginSecessful] = useState(false);
  const handdlerLogin = async(e) => {
    e.preventDefault();
    console.log(`click`);
    const data = {
      userName,
      password,
    };
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.json();

  if (result.token) {
      console.log(result.token);
      localStorage.setItem("token", result.token);
      setLoginSecessful(true);
  } else {
      setLoginSecessful(false);
  }

  console.log(result.token);
    // fetch("http://localhost:3001/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then((result) => {
    //     if (result.token) {
    //       console.log(result.token);
    //       localStorage.setItem("token", result.token);
    //       setLoginSecessful(true);
    //     } else {
    //       setLoginSecessful(false);
    //     }
    //     console.log(result.token);
    //   })
      
  };
  return (
    <>
      {loginSecessful ? (
        <Home></Home>
      ) : (
        <div className="login-container">
          <form className="login-form">
            <label>UserName:</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="UserName"
              type="text"
            />
            <label>Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
            <button onClick={handdlerLogin}>Login</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
