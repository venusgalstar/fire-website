import React, { useState } from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import logo from '../../../assets/images/logo_big.png';
import { CSSTransition } from "react-transition-group";

import './styles.scss';

const HomeVision = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    return <section id="section-vision" className="section">
        <Parallax onEnter={() => { setStartAnimation(true) }}>
            <div className="section__inner">
                <ParallaxBanner
                    layers={[
                        { image: '/v2/assets/bg1.jpg', speed: 30 },
                        {
                            speed: 0,
                            children: <div style={{ width: '100%', height: '100%', backgroundColor: "rgba(36, 35, 35, 0.9)", opacity: 0.54 }}/>,
                        }
                    ]}
                    className="aspect-[2/1]"
                >
                    <div className="section-vision__inner">
                        <div className="section-vision__content">
                            <CSSTransition timeout={500} in={startAnimation} classNames="fade-ease-in">
                                <div className="section-vision__text">
                                    <h6 className="section-vision__t1">
                                        Fight The Good Fight!
                                    </h6>
                                    <h2 className="section-vision__t2">
                                        This Is<br/>
                                        How We Rise...<br/>
                                        <span style={{ fontStyle: 'italic' }}>A Higher Vision.</span><br/>
                                    </h2>
                                    <div className="section-vision__description">
                                        Phoenix Community Capital will take community recommendations combined with independent research, and qualify each protocol prior to investment, to spread risk across short, medium, and long term ROI.
                                    </div>
                                </div>
                            </CSSTransition>
                            <CSSTransition timeout={1000} in={startAnimation} classNames="fade-ease-in">
                                <div style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                padding: '120px 20px'
                            }}>
                                <div style={{
                                    backgroundColor: 'rgb(36,35,35, 0.6)',
                                    width: '270px',
                                    height: '360px',
                                    padding: '50px 40px',
                                    textAlign: 'center',
                                    position: 'relative',
                                }}>
                                    <div>
                                        <img
                                            src={logo}
                                            style={{
                                                marginTop: '-150px',
                                                width: '247px',
                                                height: '252px',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%'
                                            }}
                                        />
                                    </div>
                                    <div style={{ fontSize: '1.3em', lineHeight: '1.5', marginTop: '30px'}}>
                                        Phoenix Community Capital exposes the community to a multitude of on‑chain and off‑chain physical investments, while reducing fees through consolidation.
                                    </div>
                                </div>
                            </div>
                            </CSSTransition>
                        </div>
                    </div>
                </ParallaxBanner>
            </div>
        </Parallax>
    </section>
}

export default HomeVision;