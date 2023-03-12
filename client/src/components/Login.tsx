import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { signIn } from "../services/Auth";

const styles = {
  button: {
    cursor: 'pointer',
  },
  buttonDisabled: {
    cursor: 'not-allowed',
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDisabled(true);
    const response = await signIn(username, password);

    if (!response.authenticated) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("authenticated", "true");
    localStorage.setItem("username", response.username);
    localStorage.setItem("userId", response.user_id);

    navigate("/dashboard");
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='submit'>
          <button style={isDisabled ? styles.buttonDisabled : styles.button} onClick={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
