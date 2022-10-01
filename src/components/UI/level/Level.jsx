import React from 'react';
import cl from './Level.module.scss';

export default function Level({ text, color, number }) {
    return (
        <div className={cl.level}>
            <p className={cl.level__title}>{text}</p>
            <div className={`${cl.level__color} ${cl['level__color' + color]}`}>{number}</div>
        </div>
    )
}
