import React from "react";
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/images/logo.png';

import './styles.scss';


class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    showSettings (event) {
        event.preventDefault();
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    render () {
        return (
            <>
                <div className={"burger-container"}>
                    <a href="/"><img src={logo} height={115} alt={"Logo"} className={"burger-logo"}/></a>
                    <Menu right width={'70%'}
                          isOpen={this.state.menuOpen}
                          onStateChange={(state) => this.handleStateChange(state)}
                    >
                        {/*<img src={logo} alt={"Logo"} className={"mobile-logo-img"}/>*/}
                        <a id={"home"} className={"menu-item"} href="/">Home</a>
                        <a href="/#section-about" className={"menu-item"} onClick={() => this.closeMenu()}>About</a>
                        <a href="/#section-faq" className={"menu-item"} onClick={() => this.closeMenu()}>FAQ</a>
                        <a href="/#section-team" className={"menu-item"} onClick={() => this.closeMenu()}>Team</a>
                        <a href="mailto:help@thephoenix.finance" className={"menu-item"}>Contact</a>
                        <a href="/app" className={"menu__item_active"}>LAUNCH APP</a>
                        <a href="https://twitter.com/phoenix_fi" target="_blank" rel="nofollow noopener noreferrer"><i class="fab fa-twitter"></i></a>
                        <a href="https://discord.gg/uUaZgsZXM5" target="_blank" rel="nofollow noopener noreferrer"><i class="fab fa-discord"></i></a>
                        <a href="https://medium.com/@phoenix-community-capital" target="_blank" rel="noreferrer noopener"><i class="fab fa-medium"></i></a>
                    </Menu>
                </div>
            </>
        );
    }
}

export default Burger;
