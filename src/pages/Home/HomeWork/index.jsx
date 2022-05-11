import React, { useState } from "react";
import {Button} from "../../../components/Button";
import { CSSTransition } from 'react-transition-group';

import './styles.scss';
import {Parallax} from "react-scroll-parallax";

export const HomeWork = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    return <section
        id="section-work"
        className="section"
        style={{
            margin: '0 auto',
            padding: '70px 20px',
            textAlign: 'center',
            background: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/v2/assets/bg2.jpg) no-repeat 50% 50%"
        }}
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
                    }}>
                        Everything you need<br/>to know how we work.
                    </h3>
                </CSSTransition>
                <CSSTransition
                    in={startAnimation}
                    timeout={500}
                    classNames="fade"
                >
                    <div style={{
                        lineHeight: 1.4,
                        maxWidth: "570px",
                        margin: "50px auto",
                        textAlign: "center"
                    }}>
                        <p style={{ color: "#FB8B0B", lineHeight: 1.4, fontSize: '1.2em', marginBottom: '40px' }}>10 $FIRE = 1 Phoenix Nest = 0.225 $FIRE a day. It's that simple.</p>
                        <p style={{ lineHeight: 1.4, marginBottom: '40px', fontSize: '1.2em'}}>The Phoenix Community Capital project is designed around an investment position holder called a Nest.</p>
                        <p style={{ color: "#FB8B0B", lineHeight: 1.4, fontSize: '1.2em', marginBottom: '40px' }}>Nests are the tools that allow you to generate $FIRE rewards while reinforcing the sustainable growth of the token.</p>
                        <p style={{ lineHeight: 1.4, fontSize: '1.2em', marginBottom: '40px'  }}>This means double rewards for you as the value of your rewards increase with the growth of the value of $FIRE.</p>
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
                            onClick={() => { window.open("/docs/Phoenix Community Capital White Paper.pdf") }}
                            style={{ padding: '20px 40px' }}
                        >
                            See Our Whitepaper
                        </Button>
                    </div>
                </CSSTransition>
            </div>
        </Parallax>
    </section>
}

export default HomeWork;