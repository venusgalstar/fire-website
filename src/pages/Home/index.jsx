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
import HomeTeam from "./HomeTeam";
import HomeBurger from "./HomeBurger";
import HomeRoadmap from "./HomeRoadmap";

export const Home = () => {
    return <>
        <HomeNavigation />
        <HomeBurger/>
        <HomeMain/>
        <HomeStartEarning/>
        <HomeCounters/>
        <HomeAbout/>
        <HomeHow/>
        <HomeBenefits/>
        <HomeTeam/>
        <HomeVision/>
        <HomeBoost/>
        <HomeWork/>
        {/*<HomeRoadmap/>*/}
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