import { useState } from "react";
import { register } from "../services/Auth";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    // event.preventDefault()
    await register(username, password, email);
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
