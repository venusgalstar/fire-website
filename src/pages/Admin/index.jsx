import React from "react";

import Content from "../../components/admin/content";
import Footer from "../../components/common/Footer"
import Header from "../../components/Header";
import HomeBottom from "../Home/HomeBottom";
import AppMenuButton from "../../components/AppMenuButton";
import Navigation from "../../components/Navigation";
import ConnectButton from "../../components/ConnectButton";



class Admin extends React.Component {

    render() {
        return (
            <>
                <Navigation menu={<ConnectButton/>}/>
                <Header title="Setting FIRE NFT ART"/>
                <Content />
                <HomeBottom/>
            </>
        );
    }
}


export default Admin;