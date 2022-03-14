import React from "react";
import HomeMain from "./HomeMain";
import HomeCounters from "./HomeCounters";
import { connect } from "react-redux";
import HomeAbout from "./HomeAbout";
import HomeHow from "./HomeHow";
import HomeBenefits from "./HomeBenefits";
import HomeVision from "./HomeVision";
import HomeStartEarning from "./HomeStartEarning";
import HomeBoost from "./HomeBoost";
import HomeWork from "./HomeWork";
import HomeBottom from "./HomeBottom";
import HomeNavigation from "./HomeNavigation";
import HomeFAQ from "./HomeFAQ";

export const Home = () => {
    return <>
        <HomeNavigation />
        <HomeMain/>
        <HomeStartEarning/>
        <HomeCounters/>
        <HomeAbout/>
        <HomeHow/>
        <HomeBenefits/>
        <HomeVision/>
        <HomeBoost/>
        <HomeWork/>
        <HomeFAQ />
        <HomeBottom/>
    </>
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);