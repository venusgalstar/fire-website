import React from "react";
import PropTypes from "prop-types";

export const Logo = ({ type }) => {
    return <div className={`logo logo_${type}`}>

    </div>
}

Logo.propTypes = {
    type: PropTypes.oneOf(['small', 'large']),
}

export default Logo;