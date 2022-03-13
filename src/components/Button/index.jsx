import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

export const Button = ({ type, children, ...props }) => {
    return <button className={`button button_${type}`} {...props}>
        { children }
    </button>
}

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'primary']),
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.string.isRequired]),
    onClick: PropTypes.func,
    style: PropTypes.object,
}