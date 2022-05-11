import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import './styles.scss';

export const HomeAbout = () => {
    return <section id="section-about">
        <ParallaxBanner
            layers={[
                { image: '/v2/assets/bg1.jpg', speed: 30 },
                {
                    speed: 50,
                    children: <div style={{ width: '100%', height: '100%', backgroundColor: "rgb(0 0 0)", opacity: 0.72 }}/>,
                },
                {
                    speed: 0,
                    children: <div className="section-about__content">
                        <h4 style={{ width: '660px', textAlign: 'center', lineHeight: '1.4', alignSelf: 'center' }}>
                            Phoenix Community Capital works for its investors by leveraging combined investment capital which elevates into investment options that are not available to the average investor.
                        </h4>
                    </div>
                }
            ]}
            className="aspect-[2/1]"
        >
            <div className="section-about__empty"/>
        </ParallaxBanner>
    </section>
}

export default HomeAbout;