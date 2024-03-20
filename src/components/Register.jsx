import React, { useState } from "react"; // Import React and useState
import { useNavigate } from "react-router-dom";

function Register({ setToken }) {
  // Pass props to Register component

  const [userInfo, setUserInfo] = useState({
    // Moved useState inside the Register component
    username: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    // post our user to the database with fetch or axios
    // use the token we get back in the response to SetToken
    setToken(/* pass the token received */);
    navigate("/useraccount");
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={userInfo.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={userInfo.lastname}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;
