import React from 'react';
import cl from './Avatar.module.scss';

export default function Avatar({ imgPath }) {
  return (
    <img src={imgPath} alt="avatar" className={cl.avatar}/>
    // <div style={{
    //   background: `url(${imgPath
    //       ? imgPath
    //       : 'https://via.placeholder.com/200x200/FFF'
    //     }) center/200% no-repeat`,
    // }} className={cl.avatar} />
  )
}
