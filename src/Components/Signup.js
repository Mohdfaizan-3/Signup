import React, { useEffect, useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
     const { name, email, password, confirmPassword } = formData;

    // if (!name || !email || !password || !confirmPassword) {
    //   setError(true);
    //   setSuccess(false);
    // } else {
    //   setError(false);
    //   setSuccess(true);
    // }
    
  if (!name || !email || !password || !confirmPassword) {
    setError(true);
    setSuccess(false);

  } else if (password !== confirmPassword) {
    setError(true);
    setMessage("password and confirm password do not match")
    setSuccess(false);

  } else {
    setError(false);
    setSuccess(true);
    setMessage('');
  }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Full Name"
        id="name"
        name="name"
        // value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        // value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        // value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        // value={formData.confirmPassword}
        onChange={handleInputChange}
      />

      {
        message && <div className="message">{message}</div>
      }
      {error ? (
        <div className="display-error">Error: All fields are mandatory</div>
      ) : null}
      {success ? (
        <div className="display-success">Successfully signed up</div>
      ) : null}
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
