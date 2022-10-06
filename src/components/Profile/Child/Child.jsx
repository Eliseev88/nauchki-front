import React from 'react';
import Avatar from '../../UI/avatar/Avatar';
import cl from './Child.module.scss';
import { Link } from 'react-router-dom';

export default function Child({ name, img, birth, url }) {
  return (
    <Link to={url} className={cl.child}>
        <div className={cl.child__avatar}>
            <Avatar imgPath={img} />
        </div>
        <div className={cl.child__info}>
            <div className={cl.child__name}>{name}</div>
            <div className={cl.child__birth}>{birth}</div>
            <div className={cl.child__age}>(1 год)</div>
        </div>
    </Link>
  )
}
