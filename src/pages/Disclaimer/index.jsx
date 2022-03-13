
// import Header from "../../components/home/HomeHeader";
import {connect} from "react-redux";
import Index from "./DisclaimerContent";
import React from "react";
import Footer from "../../components/common/Footer";
import ConnectButton from "../../components/ConnectButton";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import AppMenuButton from "../../components/AppMenuButton";
import HomeBottom from "../Home/HomeBottom";
import DisclaimerContent from "./DisclaimerContent";


class Disclaimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (
            <>
                <Navigation menu={<AppMenuButton/>}/>
                <Header title="Disclaimer"/>
                <DisclaimerContent/>
                <HomeBottom/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { state };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);