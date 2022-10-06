import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import cl from './User.module.scss';
import Button from '../../UI/button/Button';
import Avatar from '../../UI/avatar/Avatar';
import { friends } from '../../../utils/constants';
import { useSelector, useDispatch } from "react-redux";
import { getUserDataThunk, logout } from '../../../store/user/actions';
import { selectUserData } from '../../../store/user/selectors';

export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  }
  
  useEffect(() => {
   dispatch(getUserDataThunk())
  }, []);

  return (
    <section className={cl.user}>
      <div className="container">
        <h1 className={cl.user__title}>Мой кабинет</h1>
        <div className={cl.user__wrapper}>
          <div className={cl.user__exit}>
            <Button onClick={handleLogout}>Выйти</Button>
          </div>
          <div className={cl.user__box}>
            <div className={cl.user__info}>
              <Link className={cl.marginRight} to='' target="_blank">
                <Avatar imgPath='https://via.placeholder.com/200x200/FFF' />
              </Link>
              <Button>Изменить</Button>
            </div>
            <div className={cl.user__info}>
              <div className={cl.user__name}>{user?.username}</div>
              <Button>Изменить</Button>
            </div>

          </div>
          <div className={cl.friends}>
            {friends.map(friend => {
              return (
                <div className={cl.friends__info} key={friend.id}>
                  <Link to={`/user/${friend.id}`}>
                    <Avatar imgPath={friend.image} />
                  </Link>
                  <div className={cl.friends__name}>{friend.userName}</div>
                </div>
              )
            })}
            <Button circle='true'>+</Button>
            <div className={cl.friends__add}>Добавьте родственников, чтобы они следили за тем, как развивается ваш малыш</div>
          </div>
        </div>
      </div>
    </section>
  )
}
