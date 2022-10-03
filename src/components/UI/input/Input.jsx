import React from 'react';
import cl from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
    return (
      <input ref={ref} className={cl.input} {...props} />
    )
  });

export default Input;
