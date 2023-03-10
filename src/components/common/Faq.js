import React from "react";

class Faq extends React.Component {

    constructor() {
        super();
        this.state = { selId: -1 };
    }
    clickItem(index) {
        if (this.state.selId === index) {
            this.setState({ selId: -1 });
        } else {
            this.setState({ selId: index });
        }
    }

    render() {
        return (
            <section id="section-faq">
                <div className="content mx-auto">
                    <div className="faq-title">
                        <h2 className="headTwoBl">Frequently Asked Questions</h2>
                    </div>
                    <div id="faq-content" className="mx-auto">

                        <div className="faqLeft">
                            <button className={this.state.selId === 1 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(1) }} >
                            <span className="faqQw">What is the FIRE token?</span>
                                </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">
                                    FIRE is a token that is designed to generate high-yield rewards for
                                    you, by combining investment capital into DeFi yield protocols, decentralized reserve currency,
                                    and other high yield large scale investments that are generally unsuitable for individual
                                    investors.<br /><br />
                                </p>
                            </div>

                            <button className={this.state.selId === 2 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(2) }}>
                                <span className="faqQw">How do I get rewarded?</span>
                            </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">
                                    FIRE uses a simple mechanism to redistribute the yield while
                                    supporting the growth of the project. The reward rate has been balanced for maximum
                                    sustainability.<br /><br />You can create a Phoenix Nest with 10 FIRE tokens. Once your Nest is
                                    created, it will generate rewards on an ongoing basis.
                                </p>
                            </div>

                            <button className={this.state.selId === 3 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(3) }}>
                                <span className="faqQw">What happens to the 10 FIRE used to create a Phoenix Nest?</span>
                            </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">
                                    When a Phoenix Nest is created, 7 FIRE are transferred to the
                                    rewards pool, 1 FIRE is added to the liquidity pool as 50% FIRE and 50% AVAX, and 2 FIRE are
                                    transferred to the treasury wallet to be used for investments.
                                </p>
                            </div>

                            <button className={this.state.selId === 4 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(4) }}>
                                <span className="faqQw">How are investments chosen?</span>
                            </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">
                                    Phoenix Finance represent the idea of DeFi as a Service (DaaS), and
                                    as such, investments are decided by the Phoenix Finance investment advisors. The community will be kept aware of the investments, and we welcome investment suggestions on our Discord server,
                                    however, investments will be decided ultimately by the Phoenix Finance team for the betterment
                                    of the project and sustainability of the investments.<br /><br />We will display an investment
                                    ledger for the community to see what is invested, when it was invested, and the return on
                                    investment status.

                                </p>
                            </div>

                        </div>

                        <div className="faqRight">

                            <button className={this.state.selId === 5 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(5) }}>
                                <span className="faqQw">Why is FIRE on the Avalanche Chain?</span>
                            </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">
                                    Our goal is to bring DeFi into the average household. Ethereum's
                                    high gas fees make it impossible for most people to access the
                                    Ethereum network.
                                    <br />
                                    <br />
                                    We want FIRE to be <strong>accessible to everyone</strong>, including
                                    smallholders, so we chose to be on the Avalanche Chain. However,
                                    this does not prevent us from taking advantage of DeFi yield
                                    protocols on Ethereum.
                                </p>
                            </div>

                            <button className={this.state.selId === 6 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(6) }}>
                                 <span className="faqQw">What is a Phoenix Nest?</span>
                            </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">
                                    A Nest is a term used to describe an initial deposit holding. When
                                    you create a Nest, you are depositing funds to the treasury to be used for the project's
                                    investments.<br /><br />
                                </p>
                            </div>

                            <button className={this.state.selId === 7 ? "accordion active" : "accordion"} onClick={() => { this.clickItem(7) }}>
                                <span className="faqQw">Where can I buy $FIRE and where can I create my NEST?</span>
                            </button>
                            <div className="panel" >
                                <p data-nsfw-filter-status="swf">You can easily buy FIRE on&nbsp;
                                    {/* <a
                                    href="https://app.pangolin.exchange/#/swap?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5"
                                    className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>Pangolin</a> and  */}
                                    <a
                                    // href="https://traderjoexyz.com/trade?inputCurrency=AVAX&amp;outputCurrency=0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5#/"
                                    href="https://www.swapsicle.io/en/swap"
                                    className="c-purple" data-nsfw-filter-status="swf" style={{ textDecoration: "none" }}>Swapsicle</a>.<br /><br />The contract address of the FIRE token is :
                                    <br /><b className="contract">0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5</b><br /><br />You can create your FIRE-NESTs and
                                    collect your FIRE rewards on our web app: thephoenix.finance/app .<a
                                        href="https://thephoenix.finance/app" className="c-purple" data-nsfw-filter-status="swf"
                                        style={{ textDecoration: "none" }}> Click&nbsp;here </a>to go to the web app.</p>
                            </div>

                        </div>
                    </div >
                </div>
            </section >
        )
    }
}

export default Faq;