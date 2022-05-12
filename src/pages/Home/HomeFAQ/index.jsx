import React, {useCallback, useState} from "react";

import './styles.scss';

const HomeFAQ = () => {
    const [selId, setSelId] = useState(1);
    const clickItem = useCallback((index) => {
        if (selId === index) {
            setSelId(-1);
        } else {
            setSelId(index);
        }
    }, [selId])
    return <section id="section-faq" className="section section-faq">
        <div className="section-faq__inner">
            <h2 className="section-faq__title">
                Frequently Asked Questions
            </h2>
            <div className="section-faq__content">
                <div className="accordion-wrapper">
                    <div className={selId === 1 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(1)
                    }}>
                        <span className="accordion__title">What is the $FIRE token?</span>
                    </div>
                    <div className="panel">
                        <p>
                        $FIRE is a token that is designed to generate high-yield rewards by combining investment capital into DeFi yield protocols, decentralized reserve currency, and other high-yield, large scale investments that are generally unsuitable for individual investors. 
                        </p>
                    </div>
                </div>
                <div className="accordion-wrapper">
                    <div className={selId === 2 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(2)
                    }}>
                        <span className="accordion__title">How do I get rewarded?</span>
                    </div>
                    <div className="panel">
                        <p>
                            $FIRE uses a simple mechanism to redistribute the yield while
                            supporting the growth of the project. The reward rate has been balanced for maximum
                            sustainability.
                        </p>
                        <p>
                            You can create a Phoenix Nest with 10 $FIRE tokens. Once your Nest is
                            created, it will generate rewards on an ongoing basis.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 3 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(3)
                    }}>
                        <span className="accordion__title">What happens to the 10 $FIRE used to create a Phoenix Nest?</span>
                    </div>
                    <div className="panel">
                        <p>
                            When a Phoenix Nest is created, 7 $FIRE are transferred to the
                            rewards pool, 1 $FIRE is added to the liquidity pool as 50% $FIRE and 50% AVAX, and 2 $FIRE are
                            transferred to the treasury wallet to be used for investments.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 4 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(4)
                    }}>
                        <span className="accordion__title">How are investments chosen?</span>
                    </div>
                    <div className="panel">
                        <p data-nsfw-filter-status="swf">
                        Phoenix Community Capital represents the idea of Investment as a Service (IaaS), and as such, investments are decided by our investment advisors. The community will be made aware of the investments, and we welcome investment suggestions on our Discord server. However, investments will ultimately be decided by the Phoenix Community Capital team for the betterment of the project and sustainability of the investments. 
 
                        <br/><br/>We will display an investment ledger for the community to see what is invested, when it was invested, and the return-on-investment status. 

                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 5 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(5)
                    }}>
                        <span className="accordion__title">Why is $FIRE on the Avalanche Chain?</span>
                    </div>
                    <div className="panel">
                        <p>
                            Our goal is to bring DeFi into the average household. Ethereum's
                            high gas fees make it impossible for most people to access the
                            Ethereum network.
                        </p>
                        <p>
                            We want $FIRE to be <strong>accessible to everyone</strong>, including
                            smallholders, so we chose to be on the Avalanche Chain. However,
                            this does not prevent us from taking advantage of DeFi yield
                            protocols on Ethereum.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 6 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(6)
                    }}>
                        <span className="accordion__title">What is a Phoenix Nest?</span>
                    </div>
                    <div className="panel">
                        <p>
                            A Nest is a term used to describe an initial deposit holding. When
                            you create a Nest, you are depositing funds to the treasury to be used for the project's
                            investments.
                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 7 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(7)
                    }}>
                        <span  className="accordion__title">Where can I buy $FIRE and where can I create my NEST?</span>
                    </div>
                    <div className="panel">
                        <p>
                            You can easily buy $FIRE on
                            {/* <a
                            href="https://app.pangolin.exchange/#/swap?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5"
                            className="c-purple" style={{textDecoration: "none"}}>Pangolin</a> and  */}
                            <a
                            href="https://traderjoexyz.com/trade?inputCurrency=AVAX&amp;outputCurrency=0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5#/"
                            className="c-purple" style={{textDecoration: "none"}}>Trader Joe</a>
                        </p>
                        <p>
                            The contract address of the $FIRE token is :
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <b>0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5</b>
                        </p>
                        <p>
                            You can create your $FIRE Nests and collect your $FIRE rewards on our web app: thephoenix.finance/app. <a
                                href="/app" className="c-purple"
                                style={{textDecoration: "none"}}
                            >Click&nbsp;here</a> to go to the web app.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default HomeFAQ;