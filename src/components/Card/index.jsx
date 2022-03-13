import React from "react";
import PropTypes from "prop-types";

import './styles.scss';

export const Card = (props) => {
    return <div className={`card card_${props.size}`}>
        <div className="card__transition">
            { props.image && <img src={props.image} className="card__image" style={props.imageStyles} /> }
            <div
                className={`card__inner card__inner_${props.align}`}
                style={{
                    backgroundImage: "url(" + props.backgroundUrl + ")",
                }}
            >
                <div className={"card__content"}>
                    { props.size === 'default' && <h4 className={'card__title'}>{props.title}</h4> }
                    { props.size === 'big' && <h2 className={'card__title'}>{props.title}</h2> }

                    <div className={'card__description'}>{props.content}</div>
                </div>
            </div>
        </div>
    </div>
}

Card.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element.isRequired]),
    content: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.element.isRequired]),
    backgroundUrl: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['default', 'big']),
    align: PropTypes.oneOf(['left', 'right']),
    image: PropTypes.string,
    imageStyles: PropTypes.object,
}

Card.defaultProps = {
    size: 'default',
    align: 'right',
    image: null,
    imageStyles: {},
}