import React from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import MasterCard from "../../../components/BoostCards/MasterCard";
import GrandMasterCard from "../../../components/BoostCards/GrandMasterCard";
import Cards from "../../../components/Cards";
import { Button } from "../../../components/Button";

class MainNFT extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selected_item: -1
        };
    }

    buyNft(type) {
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
        this.props.dispatch({ type: "UPDATE_CAN_PERFORM_STATUS", payload: { can_perfrom: false } });
        this.props.dispatch({
            type: "BUY_NFT_ART",
            payload: {
                type: type
            }
        });
    }


    static getDerivedStateFromProps(props, state) {
        var count = 0;
        for (var index in props.my_nodes) {
            if (!props.my_nodes[index].masterNFT) {
                count++;
            }
        }
        var ret = {
            enableMaster: false,
            enableGrand: false
        }
        if (count >= 10) {
            ret.enableMaster = true;
        }

        if (count == 0 && props.my_nodes.length == 100 && !props.my_nodes[0].grandNFT) {
            ret.enableGrand = true;
        }

        return ret;
    }

    render() {
        return (

            <section id="section-app-nft">
                <div className="content mx-auto">
                    <div style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "fit-content",
                        padding: "40px"
                    }}>
                        <h2>Phoenix NFT Boosts</h2>
                        <h4>
                            Buy a Phoenix NFT to boost <span className="c-yellow noto-bold">$FIRE</span> token rewards.
                        </h4>
                        <div style={{ marginTop: "90px" }}>
                            <Cards>
                                <div style={{ marginBottom: '100px'}}>
                                    <MasterCard value={this.props.master_nft_value} />
                                    <Button
                                        type="primary"
                                        disabled={!this.state.enableMaster}
                                        onClick={this.buyNft.bind(this, "master")}
                                        style={{ padding: '15px 50px' }}
                                    >
                                        Buy NFT
                                    </Button>
                                </div>
                                <div>
                                    <GrandMasterCard value={this.props.grand_nft_value}/>
                                    <Button
                                        type="primary"
                                        disabled={!this.state.enableGrand}
                                        onClick={this.buyNft.bind(this, "grand")}
                                        style={{ padding: '15px 50px' }}
                                    >
                                        Buy NFT
                                    </Button>
                                </div>
                            </Cards>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        grand_nft_url: state.grand_nft_url,
        master_nft_url: state.master_nft_url,
        grand_nft_value: state.grand_nft_value,
        master_nft_value: state.master_nft_value,
        can_perform: state.can_perform,
        my_nodes: state.my_nodes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainNFT);