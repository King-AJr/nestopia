import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../Context/AuthProvider";

import React from 'react'

const Auth = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    console.log(auth?.user)
  return (
    
    auth?.user !== undefined
        ?   <Outlet/>
        :   <Navigate to="/signin" state= {{ from: location }} replace />

    // allowedRoles.find(role => auth?.user?.includes(role))
    //  // auth.role.find(role => allowedRoles?.includes(role))
    //   ? <Outlet/>
    //   : auth?.name
    //     ? <Navigate to="/unauthorized" state={{ from: location}} replace/>
    //     : <Navigate to="/register" state={{from: location}} replace/>
  )
}

export default Auth;