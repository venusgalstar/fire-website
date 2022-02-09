import Footer from "../components/common/Footer";
import Faq from "../components/common/Faq";
import MainNext from "../components/main/Next";
import MainHeader from "../components/main/Header";
import MainMsg from "../components/main/Msg";
import MyNodes from "../components/main/Nodes";
import Create from "../components/main/Create";
import React from "react";
import Nft from "../components/main/Nft";


class Main extends React.Component {


    render() {
    
        return (
            <>
                <MainHeader></MainHeader>
                <MainMsg></MainMsg>
                <Nft></Nft>
                <Footer></Footer>
            </>
        );
    }
}


export default Main;