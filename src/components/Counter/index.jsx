import React from "react";
import PropTypes from "prop-types";

import './styles.scss';

export const Counter = (props) => {
    return <div className={'counter'}>
        <h4 className={'counter__title'}>{props.title}</h4>
        <div className={'counter__count'}>{props.count}</div>
    </div>
}

Counter.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired
}
