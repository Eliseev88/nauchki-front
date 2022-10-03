export const checkLogoTransform = (logo, header, isActiveBurgerMenu = false, setIsActiveBurgerMenu) => {
    const tabletScreenSize = 1062;

    if (isActiveBurgerMenu) {
        if (!isActiveBurgerMenu && (window.location.pathname === '/') && (document.documentElement.clientWidth <= tabletScreenSize) && (window.pageYOffset === 0)) {
            logo.current.classList.add('transform');
        } else {
            logo.current.classList.remove('transform');
        }
        return;
    }

    if (window.pageYOffset === 0 && document.documentElement.clientWidth <= tabletScreenSize) {
        header.current.classList.remove('shadow');
        if (window.location.pathname === '/') {
            logo.current.classList.add('transform');
        }
    } else {
        logo.current.classList.remove('transform');
        header.current.classList.add('shadow');
    }

    if (setIsActiveBurgerMenu) {
        if (document.documentElement.clientWidth > tabletScreenSize) {
            header.current.classList.add('shadow');
            logo.current.classList.remove('transform');
            setIsActiveBurgerMenu(false);
            document.body.classList.remove('no-scroll');
        }
    }
}
