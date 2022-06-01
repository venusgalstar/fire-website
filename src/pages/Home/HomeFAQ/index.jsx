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
                        Make a nest with 10 $FIRE. You will receive 0.06 $FIRE per nest, per day via a simple mechanism which redistributes the yield while supporting the growth of the project. The reward rate has been balanced for maximum sustainability.
                        </p>
                        <p>
                        Once the nest cap for each round is reached, in addition to the daily rewards, nest holders will get a monthly airdrop of the profits from any incubation projects created during that round, and any rounds going forward. This will be in a stablecoin.
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
                        When a Phoenix Nest is created, the 10 $FIRE are transferred to the rewards pool.
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
                            // href="https://traderjoexyz.com/trade?inputCurrency=AVAX&amp;outputCurrency=0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5#/"
                            href="https://www.swapsicle.io/en/swap"
                            className="c-purple" style={{textDecoration: "none"}}>Swapsicle</a>
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


                <div className="accordion-wrapper">
                    <div className={selId === 8 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(8)
                    }}>
                        <span className="accordion__title">Where can I find more detailed information on the first round?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Check out the <a href="/docs/Phoenix Community Capital White Paper.pdf" target="_blank">Round 1 whitepaper</a>
                        </p>
                    </div>
                </div>


                <div className="accordion-wrapper">
                    <div className={selId === 9 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(9)
                    }}>
                        <span className="accordion__title">Where can I find more detailed information on the second round?</span>
                    </div>
                    <div className="panel">
                        <p>
                        See the <a target="_blank" rel="noreferrer" href="https://medium.com/@phoenix-community-capital/tokenomic-and-sustainability-update-190ab9bba73f">Tokenomic and Sustainability Update</a> for round 2. New whitepaper coming soon.

                        </p>
                    </div>
                </div>

                <div className="accordion-wrapper">
                    <div className={selId === 10 ? "accordion active" : "accordion"} onClick={() => {
                        clickItem(10)
                    }}>
                        <span className="accordion__title">Is there a nest cap for each round?</span>
                    </div>
                    <div className="panel">
                        <p>
                        Yes, the nest cap for each round is 100,000 nests. We then move into the next round.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </section>
}

export default HomeFAQ;