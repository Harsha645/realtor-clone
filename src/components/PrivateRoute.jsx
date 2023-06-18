import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import {useAuthStates} from "../hooks/useAuthStates";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const {loggedIn, checkingStatus} = useAuthStates()
if(checkingStatus){
    return <Spinner/>
}

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
