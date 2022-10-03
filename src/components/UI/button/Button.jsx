import React from 'react';
import cl from './Button.module.scss';

export default function Avatar ({children, ...props}) {
    return (
      <button {...props} className={props.circle ? `${cl.btn} ${cl.btn_circle}` : cl.btn}>
          {children}
      </button>
    );
  }
