import React, { useState } from "react";
import {Button} from "../../../components/Button";
import { CSSTransition } from 'react-transition-group';

import './styles.scss';
import {Parallax} from "react-scroll-parallax";

export const HomeHow = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    return <section
        id="section-how"
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
                    }}>How Does Your Wealth Grow?</h3>
                </CSSTransition>
                <CSSTransition
                    in={startAnimation}
                    timeout={500}
                    classNames="fade"
                >
                    <div className="section-how__description">
                        Phoenix Community Capital enlists trusted and experienced investment advisors who research new trends and opportunities for the community investment portfolio.
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
                            onClick={() => { window.open("https://medium.com/@phoenix-community-capital/tokenomic-and-sustainability-update-190ab9bba73f") }}
                            style={{ padding: '20px 40px' }}
                        >
                            Tokenomic and Sustainability Update
                        </Button>
                    </div>
                </CSSTransition>
            </div>
            <div>
                <center><p>NEW WHITEPAPER COMING SOON</p></center>
            </div>
        </Parallax>
    </section>
}

export default HomeHow;