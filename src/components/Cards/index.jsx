import React from "react";
import PropTypes from "prop-types";

import './styles.scss';

export const Cards = (props) => {
    return <div className={'cards'}>
        { props.children }
    </div>
}

Cards.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default Cards;