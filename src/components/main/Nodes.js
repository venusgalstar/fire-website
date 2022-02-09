import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import moment from 'moment';
import PayDlg from '../common/PayDlg';
import { toast } from 'react-toastify';
import { touchRippleClasses } from '@mui/material';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
);


class Nodes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            my_nodes: [],
            open: false,
            fee_index: -1,
            selected_tab: 0,
            curTime: 0
        }
        this.props.dispatch({
            type: "GET_NODE_LIST"
        });
        this.timer = setInterval(() => {
            this.updateRewards();
        }, 1000);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.PayAllNode = this.PayAllNode.bind(this);
        this.createNode = this.createNode.bind(this);



    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        return { my_nodes: nextProps.my_nodes };
    }

    updateRewards() {
        if (this.state.my_nodes == null) {
            return;
        }
        var list = [];
        var sum = 0;
        for (var item in this.state.my_nodes) {
            const temp = this.state.my_nodes[item];
            var remain = moment(temp.lastTime * 1000).diff(this.props.currentTime * 1000);
            remain = remain / 1000;
            if (remain > 0) {
                var duration = moment.duration(remain);
                // temp['remains'] = duration.months() + "m - " +
                //     duration.days() + "d " +
                //     duration.hours() + ":" +
                //     duration.minutes() + ":" +
                //     duration.seconds();
                // temp['remains'] = "due in " + Math.floor((temp.lastTime - this.props.curTime) / (3600 * 24)) + " days";
                temp['remains'] = "due in " + Math.floor((remain) / (3600 * 24)) + " days";

                var bonus = 0.225;
                if (temp['masterNFT']) {
                    bonus += 0.025;
                }
                if (temp['grandNFT']) {
                    bonus += 0.05;
                }
                temp['reward'] = Number(temp['reward']) + bonus / (3600 * 24);
                sum += temp['reward'];
                // temp['reward'] = temp['reward'];

                if (remain > 3600 * 24 * 30) {
                    temp['payable'] = false;
                } else {
                    temp['payable'] = true;
                }
            } else {
                temp['remains'] = 'Expired';
                temp['payable'] = true;
                temp['reward'] = 0;
            }
            list.push(temp);
        }
        var curTime = Number(this.props.currentTime);
        if (curTime !== 0) {
            curTime = curTime + 1;
            this.setState({ curTime: curTime });
        }

        this.setState({ my_nodes: list });
        this.props.dispatch({
            type: "RETURN_DATA", payload: {
                cur_all_reward: sum,
                currentTime: curTime
            }
        });
    }


    selectTab = function (index) {
        this.setState({ selected_tab: index });
    }


    PayAllNode() {
        if (this.props.my_nodes.length === 0) {
            toast.info("There is no nest. Please create your own nest.", {
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
        let cnt = 0;
        for (var index in this.state.my_nodes) {
            if (this.state.my_nodes[index].payable === true) {
                cnt = cnt + 1;
            }
        }

        if (cnt === 0) {
            toast.info("You have no nest to pay.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: true
            });
            return;
        }

        this.setState({ open: true, pay_type: 0, pay_cnt: cnt });
    }

    claimNode(id) {
        if (this.props.my_nodes.length === 0) {
            toast.info("There is no nest. Please create your own nest.", {
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

        if (this.state.curTime - this.props.last_claim_time < 3600 * 24) {
            toast.info("You should claim once during 24 hours. Please wait " +
                (24 - Math.floor((this.state.curTime - this.props.last_claim_time)/3600)) + "hour(s). ",
                {
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

        var payload = { node_id: id, cnt: 1 };
        if (id === -1) {
            let cnt = 0;
            let sum = 0;
            for (var index in this.state.my_nodes) {
                sum += Number(this.state.my_nodes[index].reward);
                if (this.state.my_nodes[index].remain !== 'Expired') {
                    cnt = cnt + 1;
                }
                if (sum >= 100) {
                    break;
                }
            }
            payload.cnt = cnt;
        }
        this.props.dispatch({
            type: "CLAIM_NODE",
            payload: payload
        });
    }

    handleModalClose(value) {
        this.setState({ open: false });
        if (value) {
            this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perform: false } });
            if (this.state.pay_type === 1) {

                this.props.dispatch({
                    type: "PAY_NODE_FEE",
                    payload: {
                        node_id: this.state.fee_index,
                        duration: value.id
                    }
                })
            } else if (this.state.pay_type === 0) {
                this.props.dispatch({
                    type: "PAY_FEE_ALL",
                    payload: { count: this.state.pay_cnt, duration: value.id }
                });
            }
        }
    };

    payNodeFee(id) {
        if (!this.props.my_nodes[id].payable) {
            toast.info("You have already purchased.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: true
            });
            return;
        }
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
        this.setState({ open: true, fee_index: id, pay_type: 1 });
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
        const List = this.state.my_nodes.map((item, index) => {
            // const List = ["123", "222", "543", "23", "2342", '234', '2342', '2333', '1231', '1231'].map((item, index) => {
            return (
                <div key={index} className={index % 2 === 0 ? 'item-font nest-list-even' : 'item-font nest-list-odd'}>

                    <div className='text-center' style={{ flex: "1" }}>NEST {index + 1}</div>
                    <div className='text-center mobile-hidden' style={{ flex: "3" }}>{moment(item.createTime * 1000).format("MMM DD YYYY")}</div>
                    <div className='text-center' style={{ flex: "2" }}>{Number(item.reward).toFixed(6)}</div>
                    <div className='text-center mobile-fee-item' style={{ flex: "2" }}>
                        <div className='mobile-fee-list'>
                            {item.remains}
                        </div>
                        <div className='mobile-show flex1'>
                            <div className="pay-button list" style={{ width: "100%" }} onClick={this.payNodeFee.bind(this, index)}>Pay fee</div>
                        </div>
                    </div>
                    <div className="pay-button list mobile-hidden" style={{ width: "150px" }} onClick={this.payNodeFee.bind(this, index)}>Pay fee</div>
                    <div className="claim-button list" style={{ width: "150px" }} onClick={this.claimNode.bind(this, index)}> Claim </div>
                </div>
            )
        });


        return (
            <>
                <PayDlg
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleModalClose}
                />

                <section id='section-nests'>
                    <div className='content mx-auto'>
                        <div className='nest-header'>
                            <span className='nest-header-title'>
                                Create a Phoenix Nest with <span className='noto-bold'>10</span> <span className='c-yellow'>$FIRE</span> Tokens
                            </span>
                            <button className='btn action-btn' onClick={this.createNode}>Create your nest</button>
                        </div>
                        <div className='tab-header flex'>
                            <div className={this.state.selected_tab === 0 ?
                                'fs-40 cursor-pointer tab-item noto-bold active' : "fs-40 noto-bold cursor-pointer tab-item"}
                                onClick={() => { this.selectTab(0) }}>My Nests</div>
                            <div className={this.state.selected_tab === 1 ?
                                'fs-40 cursor-pointer tab-item noto-bold active' : "fs-40 noto-bold cursor-pointer tab-item"}
                                onClick={() => { this.selectTab(1) }}>NFT Boosts</div>
                        </div>
                        <div className='tab-content'>
                            {this.state.selected_tab === 0 ?
                                <>
                                    <div className='h-60  node-title-header mobile-flex' style={{ display: "flex !important", width: "100%" }}>
                                        <div className="pay-button" style={{ width: "150px" }} onClick={this.PayAllNode.bind(this, -1)}>Pay all fees</div>
                                        <div className="claim-button claimAll" style={{ width: "150px" }} onClick={this.claimNode.bind(this, -1)}> 
                                        Claim all
                                                <span className='pos-abs fs-14 flex align-center justify-center tooltip claimAlli'
                                                    style={{ top: "-8px", right: "-20px", width: "20px", height: "20px", backgroundColor: "black", borderRadius: "10px", color: "white" }}>
                                                    i
                                                    <span className='tooltiptext'>
                                                        Maximum of 1 claim up to 100 Fire every 24 hours.
                                                    </span>
                                                </span>
                                        </div>
                                    </div>
                                    <div className='h-60 flex align-center node-title-header' style={{ width: "100%" }}>
                                        <div className='padder-10 noto-bold' style={{ flex: "1" }}>Name</div>
                                        <div className='text-center noto-bold mobile-hidden' style={{ flex: "3" }}>Reward Start</div>
                                        <div className='text-center noto-bold' style={{ flex: "2" }}>My Rewards</div>
                                        <div className='text-center noto-bold' style={{ flex: "2" }}>
                                            <span className='pos-rel noto-bold'>
                                                Fees
                                                <span className='pos-abs fs-14 flex align-center justify-center tooltip'
                                                    style={{ top: "-8px", right: "-20px", width: "20px", height: "20px", backgroundColor: "black", borderRadius: "10px", color: "white" }}>
                                                    i
                                                    <span className='tooltiptext'>
                                                        Maintenance fee is 0.2 AVAX for a 90 day period.  Please note, failure to pay switches the Nest off and rewards cease.
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="pay-button mobile-hidden" style={{ width: "150px" }} onClick={this.PayAllNode.bind(this, -1)}>Pay all fees</div>
                                        <div className="claim-button mobile-visible-false claimAll" style={{ width: "150px" }} onClick={this.claimNode.bind(this, -1)}> Claim all 
                                                <span className='pos-abs fs-14 align-center justify-center tooltip claimAlli mobile-hidden'
                                                    style={{ top: "-8px", right: "-20px", width: "20px", height: "20px", backgroundColor: "black", borderRadius: "10px", color: "white" }}>
                                                    i
                                                    <span className='tooltiptext'>
                                                        Maximum of 1 claim up to 100 Fire every 24 hours.
                                                    </span>
                                                </span>
                                        </div>
                                    </div>
                                    <div className='mynode-list-content'>
                                        <CustomScrollbars>
                                            {this.props.my_nodes.length > 0 ? List :
                                                <div className='fs-40 c-w w-full h-full flex align-center justify-center text-center'>You have no nest!<br /> Create your own nest</div>}
                                        </CustomScrollbars>
                                    </div>
                                </> :
                                <>
                                    <div className='flex justify-center align-center nftsInTab' style={{ width: "100%", height: "100%" }}>
                                    <div className="card">
                                            <div className="card-img masterNFT"></div>
                                            <div className="card-item-title">
                                                <span className="text-center noto-bold">MASTER</span>
                                            </div>
                                            <div className="card-item-info">
                                             <span className="nftBtnNum">My NFT : {this.props.my_nfts.length <= 10 ? this.props.my_nfts.length : 10}</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-img grandNFT"></div>
                                            <div className="card-item-title">
                                                <span className="text-center noto-bold">GRAND MASTER</span>
                                            </div>
                                            <div className="card-item-info">
                                                 <span className="nftBtnNum">My NFT : {this.props.my_nfts.length > 10 ? this.props.my_nfts.length - 10 : 0}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        my_nodes: state.my_nodes,
        currentTime: state.currentTime,
        my_nfts: state.my_nfts,
        master_nft_url: state.master_nft_url,
        grand_nft_url: state.grand_nft_url,
        can_perform: state.can_perform,
        last_claim_time: state.last_claim_time
    };
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);