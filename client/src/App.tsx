import { useNavigate } from 'react-router-dom';
import HelloWorld from 'components/Dashboard';
import './App.css';
import React from 'react';

const App = () => {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/dashboard');
  }
  return (
    //   <div>
    //   <button onClick={goToDashboard}>Go to Dashboard</button>
    // </div>

    <div>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  )
}

export default App;
