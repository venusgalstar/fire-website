import React, { useState } from "react";
import {Button} from "../../../components/Button";
import { CSSTransition } from 'react-transition-group';

import './styles.scss';
import {Parallax} from "react-scroll-parallax";

export const HomeRoadmap = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    return <section
        id="section-roadmap"
        className="section"
    >
        <Parallax onEnter={() => { setStartAnimation(true) }}>
            <div className="section__inner" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <CSSTransition
                    in={startAnimation}
                    timeout={0}
                    classNames="fade"
                >
                    <h3 style={{
                        fontStyle: 'italic',
                        color: '#FFFFFF'
                    }}>Roadmap</h3>
                </CSSTransition>
                <CSSTransition
                    in={startAnimation}
                    timeout={500}
                    classNames="fade"
                >
                    <div className="section-roadmap__description">
                        The future is ours to build.
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={startAnimation}
                    timeout={1000}
                    classNames="fade"
                >
                    <div>
                        <Button
                            type="primary"
                            onClick={() => { window.open("/docs/PCC_Roadmap_033122_.pdf") }}
                            style={{ padding: '20px 40px' }}
                        >
                            See Our Roadmap
                        </Button>
                    </div>
                </CSSTransition>
            </div>
        </Parallax>
    </section>
}

export default HomeRoadmap;