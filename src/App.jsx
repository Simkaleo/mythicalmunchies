import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import UserAccount from "./components/UserAccount";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>Mythical Munchies</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        {token && <Link to="/useraccount">User Account</Link>}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/useraccount" element={<UserAccount token={token} />} />
      </Routes>
    </>
  );
}

export default App;
