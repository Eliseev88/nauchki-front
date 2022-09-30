import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import cl from './Header.module.scss';
import logo from '../../assets/images/header/logo_nauchki.c531fbdd.svg';
import { FaRegUserCircle as Login } from 'react-icons/fa';
import { AiOutlineHome as Home } from 'react-icons/ai';
import { GiHamburgerMenu as Burger } from 'react-icons/gi';
import { useEventListener } from '../../hooks/useEventListener';
import { checkLogoTransform } from '../../utils/checkLogoTransform';

export default function Header() {

    const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);
    const [pathname, setPathName] = useState(window.location.pathname);

    const header = useRef(null);
    const logoLink = useRef(null);

    const checkActiveLink = ({ isActive }) => {
        return isActive ? `${cl.header__link} ${cl.active}` : cl.header__link;
    }

    const handleClick = () => {
        setIsActiveBurgerMenu(!isActiveBurgerMenu);
        document.body.classList.toggle('no-scroll');
    }

    const handleNavLinkClick = () => {
        setIsActiveBurgerMenu(false);
        document.body.classList.remove('no-scroll');
        setPathName(window.location.pathname);
    }

    useEffect(() => {
        checkLogoTransform(logoLink, header);
    }, [pathname])

    useEffect(() => {
        checkLogoTransform(logoLink, header, isActiveBurgerMenu);
    }, [isActiveBurgerMenu])

    useEventListener('scroll', () => {
       checkLogoTransform(logoLink, header);
    });

    useEventListener('resize', () => {
        checkLogoTransform(logoLink, header, false, setIsActiveBurgerMenu)
    })

    return (
        <header ref={header} className={cl.header}>
            <div className='container'>
                <div className={(isActiveBurgerMenu ? `${cl.header__wrapper} ${cl.active}` : cl.header__wrapper)}>
                    <NavLink ref={logoLink} to='/' className={cl.header__logo}><img src={logo} alt="logo" className={cl.header__image} /></NavLink>
                    <nav className={(isActiveBurgerMenu ? `${cl.header__nav} ${cl.active}` : cl.header__nav)}>
                        <div className={cl.header__icons}>
                            <NavLink to="/" className={cl.header__icon} onClick={handleNavLinkClick}><Home className={cl.header__svg} /></NavLink>
                            <NavLink to='/profile' className={cl.header__icon} onClick={handleNavLinkClick}><Login className={cl.header__svg} /></NavLink>
                        </div>
                        <div className={cl.header__links}>
                            <NavLink to='/about' className={checkActiveLink} onClick={handleNavLinkClick}>О проекте</NavLink>
                            <NavLink to='/tarifs' className={checkActiveLink} onClick={handleNavLinkClick}>Тарифы</NavLink>
                            <NavLink to='/sources' className={checkActiveLink} onClick={handleNavLinkClick}>Источники данных</NavLink>
                            <NavLink to='/feedback' className={checkActiveLink} onClick={handleNavLinkClick}>Обратная связь</NavLink>
                            <NavLink to='/articles' className={checkActiveLink} onClick={handleNavLinkClick}>Статьи</NavLink>
                        </div>
                    </nav>
                    <button onClick={handleClick} className={cl.burger}><Burger></Burger></button>
                </div>
            </div>
        </header>
    )
}
