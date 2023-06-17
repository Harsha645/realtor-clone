import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {useAuthStates} from "../hooks/useAuthStates";

export default function PrivateRoute() {
  const {loggedIn, checkingStatus} = useAuthStates()
if(checkingStatus){
    return <h3>Loading...</h3>
}

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
