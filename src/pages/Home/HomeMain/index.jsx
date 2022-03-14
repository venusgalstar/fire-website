import React, {useEffect, useMemo, useState} from "react";
import { Button } from "../../../components/Button";

import "./styles.scss";
import { CSSTransition } from 'react-transition-group';

export const HomeMain = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    return <section id="section-header" className="section section_wide">
        <div className={"section__title section__title_left"}>
            <CSSTransition in={mounted} timeout={0} classNames="fade">
                <h6 style={{ marginBottom: '23px' }}>
                    RISE FROM THE ASHES OF TRADITIONAL FINANCE
                </h6>
            </CSSTransition>
            <CSSTransition in={mounted} timeout={500} classNames="fade">
                <h1 style={{ margin: 0 }}>Large Scale, High Yield Return Investments</h1>
            </CSSTransition>
            <CSSTransition in={mounted} timeout={1000} classNames="fade">
                <div className={'buttons'} style={{ marginTop: '30px' }}>
                    <Button
                        type={'default'}
                        style={{ width: '210px', marginBottom: '10px' }}
                        onClick={() => { window.location.href = "/app"}}
                    >
                        Create Nest
                    </Button>
                    <Button
                        type={'primary'}
                        style={{ width: '210px' }}
                        onClick={() => { window.open("https://app.pangolin.exchange/#/swap?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5") }}
                    >
                        Buy Fire
                    </Button>
                </div>
            </CSSTransition>
        </div>
    </section>
}

export default HomeMain;