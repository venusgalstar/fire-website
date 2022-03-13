import React from "react";
import { Card } from "../Card";
import PropTypes from "prop-types";

const GrandMasterCard = (props) => {
    return <Card
        size="big"
        backgroundUrl="/v2/assets/bgGrandMaster.png"
        image={"/v2/assets/grandMasterLabel.png"}
        imageStyles={{ width: '300px', top: '-80px', right: '-80px' }}
        title={
            <span style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
                GRAND <span style={{ fontStyle: 'italic', fontSize: '0.8em', }}>MASTER</span>
            </span>
        }
        align="left"
        content={
            <span>
                The Grand Master NFT is available<br/>
                once you build all 100 NESTS.<br/>
                The Grand Master NFT boosts<br/>
                rewards by 0.05 for each Nest per<br/>
                day. The cost of a Grand Master NFT<br/>
                is {props.value} AVAX. Each wallet will be limited<br/>
                to a total of one Grand Master NFT.<br/>
            </span>
        }
    />
}

GrandMasterCard.propTypes = {
    value: PropTypes.number
}

export default GrandMasterCard;