import React from 'react'
import PropTypes from 'prop-types'
import './Spinner.scss';

const Spinner = props => {
    const scale = determineScale(props.size);

    const scaleStyle = {
        transform: `scale(${scale})`
    }

    const colorStyle = {
        background: `${props.color ? props.color : "black"}`
    }

    return (
        <div className="Spinner" style={scaleStyle}>
            <div className="lds-default" >
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
                <div style={colorStyle}></div>
            </div>
        </div>
    )
}

Spinner.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

const determineScale = size => {
    switch (size) {
        case "extrasmall": return 0.2;
        case "small": return 0.4
        case "large": return 1.5
        default: return 1
    }
}

export default Spinner
