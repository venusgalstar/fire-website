import React from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';
import TokenChart from "../common/chart";
import Nodes from "./Nodes";
import RtChart from '../common/rt_chart';
import config from '../../contract/config';
import moment from "moment";


class RingMsg extends React.Component {

    constructor(props) {
        super(props);
        this.handleConnect = this.handleConnect.bind(this);
        this.createNode = this.createNode.bind(this);
        setInterval(() => {
            props.dispatch({ type: "GET_FIRE_VALUE" });
            props.dispatch({ type: "GET_BOND_USER_INFO" });
        }, 1000);
        this.state = {
            coins: config.coins
        };
        this.handleInput = this.handleInput.bind(this);
        this.bondFire = this.bondFire.bind(this);
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

    handleInput(event, index) {
        var data = this.state.coins;
        data[index].amount = event.target.value;
        this.setState({ coins: data });
    }

    bondFire(item) {
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
        this.props.dispatch({ type: "BOND_FIRE", payload: { coin: item } });
    }

    redeemFire() {
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
        if (this.props.bondCurrentTime - this.props.bondCreateTime < this.props.bondInterval * 3600) {
            toast.error("You should only redeem once per 8 hours.", {
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

        this.props.dispatch({ type: "REDEEM_FIRE" });
    }

    render() {
        const List = this.state.coins.map((item, index) => {
            return (
                <div key={index} className="flex h-40 align-end m-b-10 w-full">
                    <div className="c-w fs-20" style={{ flex: "2" }}>{index + 1}</div>
                    <div className="c-w fs-20" style={{ flex: "3" }}>{item.token_name}</div>
                    <div className="c-w fs-20" style={{ flex: "4" }}>
                        <input className="form-control bond-input" value={this.state.coins[index].amount} onChange={(event) => { this.handleInput(event, index) }} />
                    </div>
                    {/* <div className="c-w fs-20" style={{ flex: "3" }}>{item.lastTime}</div> */}
                    <div className="c-w fs-20" style={{ flex: "3" }}>
                        <div className="pay-button list" style={{ width: "150px" }} onClick={() => { this.bondFire(item); }}>Bond</div>
                    </div>
                </div>
            );
        });

        return (
            <>
                <section id="section-bond">
                    <div className="content mx-auto">
                        <div className="msg-left">
                            <div className="msg-left-content-container">
                                <div className="msg-content-item" style={{ justifyContent: "center" }}>
                                    <div className="fs-22 c-w">My All Bonds</div>
                                    <div className="fs-22 c-w"><span className="c-yellow noto-bold">{this.props.bondAmount ? Number(this.props.bondAmount).toFixed(2) : 0} FIRE</span></div>
                                </div>
                                <div className="msg-content-item mainStats">
                                    <div className="fs-22 c-w">Daily Redeem</div>
                                    <div className="fs-22 c-w"><span className="c-yellow noto-bold">1</span> FIRE</div>
                                    <div className="fs-18 c-w dashbSmall">Per ${this.props.bondPrice ? this.props.bondPrice : '---'}</div>
                                </div>
                            </div>
                            <div className="msg-left-content-container">
                                <div className="msg-content-item mainStats" style={{ padding: "10px 20px" }}>
                                    <div className="fs-22 c-w">Last Redeem Time</div>
                                    <div className="fs-20 c-yellow noto-bold">
                                        {this.props.bondCreateTime && this.props.bondCreateTime != "0" ? moment(this.props.bondCreateTime * 1000).format("YYYY-MM-DD H:mm:ss") : ""}
                                    </div>
                                    <div className="fs-18 c-gray dashbSmall">
                                        <button className="btn action-btn" style={{ width: "100%" }} onClick={() => { this.redeemFire() }}>REDEEM</button>
                                    </div>
                                </div>
                                <div className="msg-content-item mainBuy" style={{ justifyContent: 'center' }}>
                                    <div className="fs-22 c-w">FIRE Market Price</div>
                                    <div className="fs-22 c-yellow noto-bold">${Number(this.props.fire_value).toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="msg-left-content-container">
                                <div className="msg-content-item" style={{ justifyContent: "center" }}>
                                    <div className="fs-22 c-w">Treasury Balance</div>
                                    <div className="fs-22 c-yellow noto-bold">${this.props.treasury_balance ? String(this.props.treasury_balance).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : 0}</div>
                                </div>
                                <div className="msg-content-item" style={{ justifyContent: "center" }}>
                                    <div className="fs-22 c-w">Total Bonds</div>
                                    <div className="fs-22 c-yellow noto-bold">${this.props.bondTotal ? Number(this.props.bondTotal).toFixed(3) : 0}</div>
                                </div>
                            </div>
                        </div>
                        <div className="msg-right">
                            <div className="token_chart bond_panel flex flex-col" style={{padding: "10px 20px" }} >
                                <div className="flex h-30 w-full">
                                    <div className="c-w fs-20" style={{ flex: "2" }}>No</div>
                                    <div className="c-w fs-20" style={{ flex: "3" }}>Token</div>
                                    {/* <div className="c-w fs-20" style={{ flex: "3" }}>Price</div> */}
                                    <div className="c-w fs-20" style={{ flex: "4" }}>Amount</div>
                                    <div className="c-w fs-20" style={{ flex: "3" }}></div>
                                </div>
                                <div className="w-full">
                                    {List}
                                </div>
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
        fire_value: state.fire_value,


        bondAmount: state.bondAmount,
        bondPrice: state.bond_price,
        bondCreateTime: state.bondCreateTime,
        bondLastTime: state.bondLastTime,
        bondCurrentTime: state.bondCurrentTime,
        bondInterval: state.bond_interval,
        bondTotal: state.bond_total,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RingMsg);