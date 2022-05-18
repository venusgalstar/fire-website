import React, { useContext } from "react";
import './styles.scss'
import { connect } from "react-redux";
import RtChart from "../../../components/common/rt_chart";
import { ContractNumbers } from "../../../context/ContractContext";

const MainInfo = (props) => {
    const contractValues = useContext(ContractNumbers)

    return <section id="main-info" className="main-info">
        <div className="main-info__inner">
            <div className="card-counters-wrapper">
                <div className="card-counter">
                    <div className="card-counter__title">My <span>NESTS</span></div>
                    <div className="card-counter__content">
                        <div><span className="redHigh">{props.my_nodes.length}</span> / 100</div>
                        <div>All nests: {props.all_nodes}</div>
                    </div>
                </div>
                <div className="card-counter">
                    <div className="card-counter__title">Daily REWARDS</div>
                    <div className="card-counter__content">
                        <div><span className="redHigh">{contractValues.nestRewardRate}</span> $FIRE</div>
                        <div>Per nest</div>
                    </div>
                </div>
                <div className="card-counter">
                    <div className="card-counter__title">My REWARDS</div>
                    <div className="card-counter__content">
                        <div><span className="redHigh">{Number(props.cur_all_reward).toFixed(6)}</span></div>
                        <div>FIRE</div>
                    </div>
                </div>
                <div className="card-counter card-counter_mobile">
                    <div className="card-counter__title">Fire Price</div>
                    <div className="card-counter__content">
                        ${Number(props.fire_value).toFixed(2)}
                    </div>
                </div>
                <div className="card-counter">
                    <div className="card-counter__title">Trade $FIRE</div>
                    <div className="card-counter__content">
                        {/* <div>
                        <a
                            href="https://app.pangolin.exchange/#/swap?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5"
                            target="_blank"
                        >
                            PANGOLIN
                        </a>
                        </div> */}
                        <div>
                            <a className="traderLink"
                                href="https://traderjoexyz.com/trade?inputCurrency=AVAX&outputCurrency=0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5#/"
                                target="_blank"
                            >
                                TraderJoe
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-counter">
                    <div className="card-counter__title">Treasury Balance</div>
                    <div className="card-counter__content">
                        ${props.treasury_balance ? String(props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0}
                    </div>
                </div>
                <div className="card-counter">
                    <div className="card-counter__title">Total Investments</div>
                    <div className="card-counter__content">
                        $634,556
                    </div>
                </div>
            </div>
            <div className="chart-wrapper">
                <div>
                    <RtChart />
                </div>
                <p className="chart-description">
                    Create a Nest with 10 $FIRE tokens to earn $FIRE rewards.<br />
                    You can use the rewards to create more Phoenix Nests and
                    grow your holding to a maximum of 100 Nests per wallet.
                </p>
            </div>
        </div>
    </section>
}

const mapDispatchToProps = dispatch => {
    return { dispatch };
}

const mapStateToProps = state => {
    return {
        account: state.account,
        my_nodes: state.my_nodes,
        cur_all_reward: state.cur_all_reward,
        all_nodes: state.all_nodes,
        can_perform: state.can_perform,
        treasury_balance: state.treasury_balance,
        fire_value: state.fire_value
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainInfo);