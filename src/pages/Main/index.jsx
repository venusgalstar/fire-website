import React from "react";
import MainInfo from "./MainInfo";
import HomeBottom from "../Home/HomeBottom";
import MainNodes from "./MainNodes";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import ConnectButton from "../../components/ConnectButton";
import MainNFT from "./MainNFT";

import './styles.scss';
// import Burger from "../../components/Burger";

class Main extends React.Component {
    render() {
        return (
            <>
                <Navigation
                    menu={<ConnectButton/>}
                    // hideOnMobileNavigation={true}
                />
                {/*<Burger/>*/}
                <Header
                    slogan="RISE FROM THE ASHES OF TRADITIONAL FINANCE"
                    title="Your $FIRE App Dashboard"
                />
                <MainInfo/>
                <MainNodes/>
                <MainNFT/>
                <HomeBottom/>
            </>
        );
    }
}


export default Main;