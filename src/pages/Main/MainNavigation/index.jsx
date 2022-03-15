import Navigation from "../../../components/Navigation";
import React from "react";
import ConnectButton from "../../../components/ConnectButton";


const MainNavigation = () => {
    return <Navigation
        menu={
            <>
                <ul className="menu">
                    <li className="menu__item"><a href="/">Home</a></li>
                    <li className="menu__item"><a href="/#section-about">About</a></li>
                    <li className="menu__item"><a href="/#section-faq">FAQ</a></li>
                    <li className="menu__item"><a href="/#section-team">Team</a></li>
                    <li className="menu__item"><a href="mailto:help@thephoenix.finance">Contact</a></li>
                    <li className="menu__item"><a href="https://twitter.com/phoenix_fi" target="_blank" rel="nofollow noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                    <li className="menu__item"><a href="https://discord.gg/uUaZgsZXM5" target="_blank" rel="nofollow noopener noreferrer"><i class="fab fa-discord"></i></a></li>
                    <li className="menu__item"><a href="https://medium.com/@phoenix-community-capital" target="_blank" rel="noreferrer noopener"><i class="fab fa-medium"></i></a></li>
                </ul>
                <ul className={"menu"}>
                    <li className="menu__item certik"><a href="https://www.certik.com/projects/thephoenix" target="_blank"><img src="/img/audit.png" alt="Certik Audit"/></a></li>
                    {<ConnectButton/>}
                </ul>
            </>
        }
        hideOnMobileNavigation={true}
    />
}

MainNavigation.propTypes = {

}

export default MainNavigation;