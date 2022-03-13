import Navigation from "../../../components/Navigation";
import React from "react";
import AppMenuButton from "../../../components/AppMenuButton";


const HomeNavigation = () => {
    return <Navigation
        menu={
            <>
                <ul className="menu">
                    <li className="menu__item"><a href="/">Home</a></li>
                    <li className="menu__item"><a href="/#section-about">About</a></li>
                    <li className="menu__item"><a href="/#section-faq">FAQ</a></li>
                    <li className="menu__item"><a href="mailto:help@thephoenix.finance">Contact</a></li>
                </ul>
                <AppMenuButton/>
            </>
        }
    />
}

HomeNavigation.propTypes = {

}

export default HomeNavigation;