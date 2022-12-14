import React from 'react';
import cl from './Social.module.scss';
import google from '../../assets/images/social_icons/Vector.svg';
import vk from '../../assets/images/social_icons/Vector (1).svg';
import facebook from '../../assets/images/social_icons/Vector (2).svg';
import yandex from '../../assets/images/social_icons/Vector (3).svg';

export default function Social() {
    return (
        <>
            <div className={cl.social__title}>Войти через другие социальные сети</div>
            <div className={cl.social__icons}>
                <a href="https://google.com" target='_blank' rel="noreferrer" className={`${cl.social__link} ${cl.google}`}>
                    <img src={google} alt="google icon" className={cl.social__image} />
                </a>
                <a href="https://vk.ru" target='_blank' rel="noreferrer" className={`${cl.social__link} ${cl.vk}`}>
                    <img src={vk} alt="vkontakte icon" className={cl.social__image} />
                </a>
                <a href="https://facebook.ru" target='_blank' rel="noreferrer" className={`${cl.social__link} ${cl.facebook}`}>
                    <img src={facebook} alt="facebook icon" className={cl.social__image} />
                </a>
                <a href="https://ya.ru" target='_blank' rel="noreferrer" className={`${cl.social__link} ${cl.yandex}`}>
                    <img src={yandex} alt="yandex icon" className={cl.social__image} />
                </a>
            </div>
        </>
    )
}
