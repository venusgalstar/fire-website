import Footer from "../components/common/Footer";
import BondHeader from "../components/ring/Header";
import BondMsg from "../components/bond/Msg";
import React from "react";
import Nft from "../components/bond/Nft";


class Bond extends React.Component {
    render() {
        return (
            <>
                <BondHeader></BondHeader>
                <BondMsg></BondMsg>
                <Footer></Footer>
            </>
        );
    }
}

export default Bond;