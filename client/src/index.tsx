import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={
          <Dashboard />
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
