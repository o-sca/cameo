import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Main() {
  const [jobInformation, setJobInformation] = useState<any>([]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard jobInformation={jobInformation} setJobInformation={setJobInformation} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(<Main />);
