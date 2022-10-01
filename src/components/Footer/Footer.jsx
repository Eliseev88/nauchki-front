import React from 'react';
import cl from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={cl.footer}>
            <div className="container">
                <div className={cl.footer__wrapper}>
                    <span className={cl.footer__text}>Свяжитесь с нами: </span>
                    <a className={cl.footer__link} href="mailto:nau4ki@yandex.ru">nau4ki@yandex.ru</a>
                </div>
            </div>
        </footer>
    )
}
