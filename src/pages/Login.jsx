import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginComponent from '../components/Login/Login';
import { selectIsAuth } from '../store/user/selectors';

export default function Login() {
  const auth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
      auth && navigate(from, { replace: true })
  }, [auth, from, navigate]);

  return (
    <main className="content">
      <LoginComponent />
    </main>
  )
}
