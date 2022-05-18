import React, {useState} from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import { CSSTransition } from "react-transition-group";
import { Button } from "../../../components/Button";

import './styles.scss';
import MasterCard from "../../../components/BoostCards/MasterCard";
import GrandMasterCard from "../../../components/BoostCards/GrandMasterCard";
import Cards from "../../../components/Cards";
import {connect} from "react-redux";

const HomeBoost = (props) => {
    const [startAnimation, setStartAnimation] = useState(false);
    return <section id="section-boost" className="section">
        <ParallaxBanner layers={[
            { image: '/v2/assets/bg3.jpg', speed: 80 },
            {
                speed: 0,
                children: <div style={{ width: '100%', height: '100%', backgroundColor: "#242424", opacity: 0.95 }}/>,
            }
        ]}>
            <div className="section__inner" style={{ height: 'auto', padding: '70px'}}>
                <Parallax onEnter={() => { setStartAnimation(true) }}>
                    <div className="section-boost__text">
                        <div style={{ textAlign: 'center' }}>
                            <CSSTransition
                                in={startAnimation}
                                timeout={0}
                                classNames="fade"
                            >
                                <h3 style={{ fontStyle: 'italic', marginBottom: '40px' }}>Boost Rewards.</h3>
                            </CSSTransition>
                            <CSSTransition
                                in={startAnimation}
                                timeout={200}
                                classNames="fade"
                            >
                                <div style={{ fontSize: '1.3em', lineHeight: '1.8' }}>
                                    NFTs are available for purchase upon reaching certain milestones. 
                                    Our NFTs boost your daily reward rate and increase your earning potential. 
                                    For more information regarding our NFTs, please see our Whitepaper. 


                                </div>
                            </CSSTransition>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                        <CSSTransition
                            in={startAnimation}
                            timeout={400}
                            classNames="fade"
                        >
                            <Cards>
                                <div style={{ marginBottom: '100px'}}>
                                    <MasterCard value={props.master_nft_value} />
                                </div>
                                <div>
                                    <GrandMasterCard value={props.grand_nft_value}/>
                                </div>
                            </Cards>
                        </CSSTransition>
                    </div>
                    {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                        <CSSTransition
                            in={startAnimation}
                            timeout={600}
                            classNames="fade"
                        >
                            <Button
                                type="primary"
                                onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}
                                style={{ padding: '20px 40px' }}
                            >
                                See our whitepaper
                            </Button>
                        </CSSTransition>
                    </div> */}
                </Parallax>
            </div>
        </ParallaxBanner>
    </section>
}

const mapStateToProps = state => {
    return {
        grand_nft_value: state.grand_nft_value,
        master_nft_value: state.master_nft_value,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeBoost);