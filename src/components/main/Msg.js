import React from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import TokenChart from "../common/chart";
import Nodes from "./Nodes";
import RtChart from '../common/rt_chart';

class MainMsg extends React.Component {

    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        this.createNode = this.createNode.bind(this);
    }

    async handleConnect() {
        if (window.ethereum) {
            await window.ethereum.enable();
            this.props.dispatch({
                type: "CONNECT_WALLET"
            });
        } else {
            toast.info("Please install metamask on your device.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    createNode() {
        if (!this.props.can_perform) {
            toast.info("Please wait. Another transaction is running.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
        this.props.dispatch({
            type: "CREATE_NODE"
        });
    }

    render() {
        return (
            <>
                <section id="section-msg">
                    <div className="content mx-auto">
                        <div className="msg-left">
                            <div className="msg-left-content-container">
                                <div className="msg-content-item mainStats">
                                    <div className="fs-22 c-w">My nests</div>
                                    <div className="fs-22 c-w"><span className="c-yellow noto-bold">{this.props.my_nodes.length}</span> / 100</div>
                                    <div className="fs-18 c-gray dashbSmall">All nests: {this.props.all_nodes}</div>
                                </div>
                                <div className="msg-content-item mainStats">
                                    <div className="fs-22 c-w">Daily rewards</div>
                                    <div className="fs-22 c-w"><span className="c-yellow noto-bold">~</span> $FIRE</div>
                                    <div className="fs-18 c-w dashbSmall">Per nest</div>
                                </div>
                            </div>
                            <div className="msg-left-content-container">
                                <div className="msg-content-item mainStats">
                                    <div className="fs-22 c-w">My rewards</div>
                                    <div className="fs-22 c-yellow noto-bold">{Number(this.props.cur_all_reward).toFixed(6)}</div>
                                    <div className="fs-18 c-gray dashbSmall">FIRE</div>
                                </div>
                                
                                <div className="msg-content-item mainStats onlyMobile" style={{ justifyContent: "center" }}>
                                    <div className="fs-22 c-w">Fire Price</div>
                                    <div className="fs-22 c-yellow noto-bold">${Number(this.props.fire_value).toFixed(2)}</div>
                                </div>

                                <div className="msg-content-item mainBuy" style={{ justifyContent: 'center' }}>
                                    <div className="fs-22 c-w">Trade Fire</div>
                                    {/* <button className="btn action-btn pangBtn" onClick={() => { window.open("https://app.pangolin.exchange/#/swap?outputCurrency=0xfcc6CE74f4cd7eDEF0C5429bB99d38A3608043a5") }}>Pangolin</button> */}
                                    <button className="btn action-btn tradrjBtn" onClick={() => { window.open("https://traderjoexyz.com/trade?inputCurrency=AVAX&outputCurrency=0xfcc6ce74f4cd7edef0c5429bb99d38a3608043a5#/") }}>TraderJoe</button>
                                </div>
                            </div>
                            <div className="msg-left-content-container">
                                <div className="msg-content-item treasuryBox" style={{ justifyContent: "center" }}>
                                    <div className="fs-22 c-w">Treasury Balance</div>
                                    <div className="fs-22 c-yellow noto-bold">${this.props.treasury_balance ? String(this.props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0}</div>
                                </div>
                                <div className="msg-content-item" style={{ justifyContent: "center" }}>
                                    <div className="fs-22 c-w">Total Investments</div>
                                    <div className="fs-22 c-yellow noto-bold">$634,556</div>
                                </div>
   
                            </div>
                        </div>
                        <div className="msg-right">
                            <div className="token_chart flex justify-center">
                                <RtChart></RtChart>
                            </div>
                            <div className="chart-text">
                                <p className="c-w">
                                    Create a Nest with 10 <span className="c-yellow noto-bold"> $FIRE</span> tokens to earn <span className="c-yellow noto-bold">$FIRE</span> rewards.<br></br>
                                    <br className="mobile-show"></br>
                                    <br className="mobile-show"></br>
                                    You can use the rewards to create more Phoenix Nests and
                                    grow your holding to a maximum of 100 Nests per wallet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="nodes-content mx-auto">
                        <Nodes></Nodes>
                    </div>
                </section>
            </>
        );
    }
};

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
export default connect(mapStateToProps, mapDispatchToProps)(MainMsg);