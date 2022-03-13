import React, { useEffect, useLayoutEffect } from "react";
import logo from '../../assets/images/logo.png';

import PropTypes from "prop-types";

import './styles.scss';

export const Navigation = (props) => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.navigation_fixed');
        const scrollTop = window.scrollY;
        scrollTop >= 150
            ? header.classList.add('navigation_sticky')
            : header.classList.remove('navigation_sticky');
    };

    useLayoutEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            console.log(width, height);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <nav className="navigation navigation_fixed">
        <div className="navigation__inner">
            <div className="navigation__logo">
                <a href="/"><img src={logo} height={115}/></a>
            </div>
            <div className="navigation__menu">
                { props.menu }
            </div>
        </div>
    </nav>
}

Navigation.propTypes = {
    menu: PropTypes.element
}

export default Navigation;
