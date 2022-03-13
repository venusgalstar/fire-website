import React, {useEffect, useRef, useState} from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import { CSSTransition } from 'react-transition-group';

import './style.scss';
import logo from "../../../assets/images/logo_huge.png";
import {Button} from "../../../components/Button";

export const HomeBenefits = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const videoPlayer = useRef(null);

    const setPlayBack = () => {
        videoPlayer.current.playbackRate = 0.5;
    };

    return <section id="section-benefits" className="section section_wide">
        <ParallaxBanner
            layers={[
                {
                    className: "video__layer",
                    speed: -30,
                    children: (
                        <video
                            ref={videoPlayer}
                            id="video"
                            poster="/v2/assets/poster.jpg"
                            loop
                            autoFocus
                            muted
                            autoPlay="autoplay"
                            onCanPlay={() => setPlayBack()}
                        >
                            <source src="/v2/assets/file.mp4" type="video/mp4"/>
                        </video>
                    )
                },
                {
                    speed: 5,
                    children: <CSSTransition
                        in={startAnimation}
                        timeout={0}
                        classNames="fade"
                    ><div style={{ position: "relative"}}>
                        <img
                            src={logo}
                            className="section-benefits__logo"
                        />
                    </div></CSSTransition>,
                },
                {
                    speed: -5,
                    children: <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: "rgb(126 27 19 / 77%)",
                        opacity: 0.95
                    }}/>,
                },
                {
                    speed: 0,
                    children: <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'url("/v2/assets/bgStripe.png") repeat center bottom',
                        opacity: 0.54
                    }}/>,
                }
            ]}
            className="aspect-[1/1]"
        >
            <Parallax onEnter={() => { setStartAnimation(true) }}>
            <div className={'section-benefits__inner'} style={{  }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}>
                    <CSSTransition
                        in={startAnimation}
                        timeout={0}
                        classNames="fade"
                    >
                    <div className="section-benefits__content">
                        <h6 className="section-benefits__t1">
                            PHOENIX COMMUNITY CAPITAL MEMBER BENEFITS
                        </h6>
                        <h2 className="section-benefits__t2">
                            LOWERED RISK<br/>
                            LESS FEES<br/>
                            LESS HASSLE<br/>
                            LESS RESEARCH<br/>
                        </h2>
                        <div style={{ marginTop: '40px' }}>
                            <Button
                                type="primary"
                                onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}
                                style={{ padding: '20px 40px' }}
                            >
                                LET IT ALL BURN
                            </Button>
                        </div>
                    </div>
                    </CSSTransition>
                </div>
            </div>
            </Parallax>
    </ParallaxBanner>
    </section>
}

export default HomeBenefits;