import React from "react";
import {Card} from "../Card";
import PropTypes from "prop-types";

const MasterCard = (props) => {
    return <Card
        size="big"
        backgroundUrl="/v2/assets/bgMaster.png"
        align="right"
        image={"/v2/assets/masterLabel.png"}
        imageStyles={{ width: '300px', top: '-80px', left: '-80px' }}
        title={
            <span style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
                MASTER
            </span>
        }
        content={
            <span>
                The Master NFT is available once <br/>
                you build at least 10 Nests. <br/>
                The Master NFT will be applied <br/>
                to 10 Nests and boosts rewards <br/>
                by 0.025 for each Nest per day. <br/>
                The cost of a Master NFT is {props.value} AVAX. <br/>
                Each wallet will be limited <br/>
                to a total of 10 Master NFT’s.<br/>
            </span>
        }
    />
}

MasterCard.propTypes = {
    value: PropTypes.number
}

export default MasterCard;