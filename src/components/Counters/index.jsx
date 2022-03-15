import React from "react";
import PropTypes from "prop-types";

import './styles.scss';

const Counters = (props) => {
    return <div className={'counters'}>
        { props.children }
    </div>
}

Counters.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default Counters;