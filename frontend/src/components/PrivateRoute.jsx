import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthstatus } from '../hooks/useAuthState';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthstatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
