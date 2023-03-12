import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/Auth";
import React from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const response = await register(username, password, email);

    if (response.authenticated) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("username", response.username);
      localStorage.setItem("userId", response.user_id);
      navigate("/dashboard");
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="form-wrapper">
        <h2>Sign Up</h2>
        <form>
          <div className='username'>
            <label htmlFor="username">Username</label>
            <input type='text' name='username' onChange={e => setUsername(e.target.value)} />
          </div>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='submit'>
            <button onClick={handleSubmit}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
