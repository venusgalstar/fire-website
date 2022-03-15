import React from "react";
import MainInfo from "./MainInfo";
import HomeBottom from "../Home/HomeBottom";
import MainNodes from "./MainNodes";
import Header from "../../components/Header";
import MainNFT from "./MainNFT";
import MainNavigation from "./MainNavigation";
import Burger from "../../components/Burger";
import ConnectButton from "../../components/ConnectButton";

import './styles.scss';

class Main extends React.Component {
    render() {
        return (
            <>
                <MainNavigation/>
                <Burger/>
                <Header
                    mobileBtn={<ConnectButton/>}
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