import { Login } from "./components/Login";
import { Register } from "./components/register";
import { Users } from "./components/users";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/users">users</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
