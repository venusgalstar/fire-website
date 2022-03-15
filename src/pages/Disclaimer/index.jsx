import {connect} from "react-redux";
import DisclaimerContent from "./DisclaimerContent";
import React from "react";
import DisclaimerNavigation from "./DisclaimerNavigation";
import Header from "../../components/Header";
import HomeBottom from "../Home/HomeBottom";
import Burger from "../../components/Burger";


class Disclaimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <DisclaimerNavigation/>
                <Burger/>
                <Header
                    mobileBtn={<a className={"button button_primary"} href="/app">LAUNCH APP</a>}
                    title="Disclaimer"
                />
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