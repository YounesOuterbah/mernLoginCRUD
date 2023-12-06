import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

export const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [_, setCookies] = useCookies(["access_token"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respones = await axios.post("http://localhost:5005/login", { username, password });
    setCookies("access_token", respones.data.token);
    window.localStorage.setItem("userID", respones.data.adminID);
    console.log(respones);
  };
  return (
    <>
      <h1>LOGIN</h1>
      <form style={{ flexDirection: "column" }} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            name="username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
};
