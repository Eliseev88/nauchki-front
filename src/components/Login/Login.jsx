import React, { useEffect, useRef, useState } from 'react';
import cl from './Login.module.scss';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectErrorAuth, selectIsAuth } from '../../store/user/selectors';
import { asyncApiCall, errorAuth as errorAuthAction } from '../../store/user/actions';
import { ErrorRequest } from '../UI/errorRequest/ErrorRequest';
import { LoaderSvg } from '../UI/loader/LoaderSvg';
import Social from '../Social/Social';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const auth = useSelector(selectIsAuth);
  const errorAuth = useSelector(selectErrorAuth, shallowEqual);

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    dispatch(asyncApiCall(email, password))
    setIsLoading(false);
  }

  useEffect(() => {
      auth && navigate(from, { replace: true });
    }, [auth, from, navigate]);

  const inputEmail = useRef(null);

  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  useEffect(() => {
    errorAuth && dispatch(errorAuthAction(false));
  }, [location, dispatch, errorAuth])

  return (
    <section className={cl.login}>
      <div className="container">
        <div className={cl.login__wrapper}>
          <h1 className={cl.login__title}>Вход</h1>
          {
            errorAuth?.response?.status === 401 &&
            <ErrorRequest>
              Неверный email или пароль
            </ErrorRequest>
          }
          <form className={cl.login__form} onSubmit={handleLogin}>
            <Input onChange={handleEmail} ref={inputEmail} type='email' placeholder='Введите почту' required />
            <Input onChange={handlePassword} type='password' placeholder='Введите пароль' required />
            <Button type='submit'>{isLoading ? <LoaderSvg /> : 'Войти'}</Button>
          </form>
          <Link to='/registration' className={cl.login__link}>Еще не зарегистрированы?</Link>
          <Link to='/recoverypass' className={cl.login__link}>Забыли пароль?</Link>
          <Social />
        </div>
      </div>
    </section>
  )
}
