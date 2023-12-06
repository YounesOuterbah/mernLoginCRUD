import axios from "axios";
import React, { useState } from "react";

export const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5005/register", {
      username,
      password,
    });
    alert("Admin created");
  };

  return (
    <>
      <h1>REGISTER</h1>
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
          <input type="submit" value="Register" />
        </div>
      </form>
    </>
  );
};
