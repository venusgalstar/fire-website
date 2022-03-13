import React from "react";
import MainInfo from "./MainInfo";
import HomeBottom from "../Home/HomeBottom";
import MainNodes from "./MainNodes";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import ConnectButton from "../../components/ConnectButton";
import MainNFT from "./MainNFT";

import './styles.scss';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navigation menu={<ConnectButton/>}/>
                <Header
                    slogan="RISE FROM THE ASHES OF TRADITIONAL FINANCE WITH"
                    title="Your $FIRE App Dashboard"
                />
                <MainInfo/>
                <MainNodes/>
                <MainNFT/>
                <HomeBottom/>
            </div>
        );
    }
}


export default Main;