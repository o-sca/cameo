import { Navigate, Route } from "react-router-dom";
import React from 'react';

interface PropType { }

const PrivateRoute = (props: PropType) => {
  const isAuth = localStorage.getItem("authenticated") === "true";
  return <> {isAuth ? <Route {...props} /> : <Navigate to="/login" />} </>
}

export default PrivateRoute;
