import React from 'react';
import cl from './Avatar.module.scss';

export default function Avatar({ imgPath }) {
  return (
    <img src={imgPath} alt="avatar" className={cl.avatar}/>
  )
}
