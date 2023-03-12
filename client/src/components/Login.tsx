import { Center } from "@chakra-ui/react";
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
    <div >
      <h2 style ={{display:"flex",justifyContent: "center", alignItems: "center", paddingTop: "90px", fontSize: "80px"}}>Login</h2>
      <form style={{display:"flex", justifyContent: "center", alignItems: "center", paddingTop: "60px"}}>
      <label htmlFor="Username">Username:</label>
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div style ={{display:"block"}}> </div>
        <label style={{paddingLeft: "25px"}} htmlFor="Password">Password:</label>
        <input
          type="password"
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
  
      <div className='submit' style={{paddingTop: "50px"}}>
          <button style={isDisabled ? styles.buttonDisabled : styles.button} onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default Login;
