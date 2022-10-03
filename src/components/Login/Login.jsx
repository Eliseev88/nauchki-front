import React, { useEffect, useRef, useState } from 'react';
import cl from './Login.module.scss';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';
import google from '../../assets/images/social_icons/Vector.svg';
import vk from '../../assets/images/social_icons/Vector (1).svg';
import facebook from '../../assets/images/social_icons/Vector (2).svg';
import yandex from '../../assets/images/social_icons/Vector (3).svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectErrorAuth, selectIsAuth } from '../../store/user/selectors';
import { asyncApiCall } from '../../store/user/actions';
import { ErrorRequest } from '../UI/errorRequest/ErrorRequest';
import { LoaderSvg } from '../UI/loader/LoaderSvg';

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
    auth && navigate(from, { replace: true })
  }, [auth]);

  const inputEmail = useRef(null);

  useEffect(() => {
    inputEmail.current.focus();
  }, []);

  return (
    <section className={cl.login}>
      <div className="container">
        <div className={cl.login__wrapper}>
          <div className={cl.login__title}>Вход</div>
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
          <div className={cl.social__title}>Войти через другие социальные сети</div>
          <div className={cl.social__icons}>
            <a href="" className={`${cl.social__link} ${cl.google}`}>
              <img src={google} alt="google icon" className={cl.social__image} />
            </a>
            <a href="" className={`${cl.social__link} ${cl.vk}`}>
              <img src={vk} alt="vkontakte icon" className={cl.social__image} />
            </a>
            <a href="" className={`${cl.social__link} ${cl.facebook}`}>
              <img src={facebook} alt="facebook icon" className={cl.social__image} />
            </a>
            <a href="" className={`${cl.social__link} ${cl.yandex}`}>
              <img src={yandex} alt="yandex icon" className={cl.social__image} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
