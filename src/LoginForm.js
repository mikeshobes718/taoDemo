import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file here

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the login logic
    console.log(email, password);
  };

  return (
    <div className="form-container"> {/* Container for the form */}
      <div>{/* Logo goes here */}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="email-input" // Class name for styling the email input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="password-input" // Class name for styling the password input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-button">Sign in</button> {/* Class name for styling the submit button */}
      </form>
      <a href="#forgot" className="forgot-password-link">Forgot password?</a> {/* Class name for styling the forgot password link */}
    </div>
  );
}

export default LoginForm;
