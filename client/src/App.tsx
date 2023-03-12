import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  )
}

export default App;
