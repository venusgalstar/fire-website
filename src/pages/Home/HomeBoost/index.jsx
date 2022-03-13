import React, {useState} from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import {CSSTransition} from "react-transition-group";
import Cards from "../../../components/Cards";
import { Card } from "../../../components/Card";
import {Button} from "../../../components/Button";

import './styles.scss';
import BoostCards from "../../../components/BoostCards";

const HomeBoost = () => {
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
                                <div style={{ fontSize: '1.3em', lineHeight: '1.8', fontFamily: "\"Nunito\", sans-serif" }}>
                                    NFTs are available for purchase upon certain milestones.
                                    Our NFTs boost your daily reward rate and increase your earning potential.
                                    For more information regarding out NFT's, please see our whitepaper.
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
                            <BoostCards/>
                        </CSSTransition>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
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
                    </div>
                </Parallax>
            </div>
        </ParallaxBanner>
    </section>
}

export default HomeBoost;