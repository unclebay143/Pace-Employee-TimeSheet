import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
    label,
    name,
    rows,
    cols,
    value,
    placeholder,
    onChange,
    className,
    labelClassName
}) => {
    return(
        <React.Fragment>
            <label className={labelClassName} htmlFor={name}>{label}</label>
            <textarea 
               name = {name}
               id = {name}
               rows = {rows} 
               cols = {cols} 
               value = {value}
               placeholder = {placeholder}
               onChange = {onChange}
               resize = "none"
               className={className}
            />
        </React.Fragment>
    );
};

Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // rows: PropTypes.number.isRequired,
    // cols: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Textarea;