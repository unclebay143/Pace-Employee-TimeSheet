import React from 'react';
import PropTypes from 'prop-types';

const names = [
    {value: "Wale", label: "boy"},
    {value: "Wale", label: "boy"},
    {value: "Wale", label: "boy"},
    {value: "Wale", label: "boy"}
]
const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    labelClassName,
    label,
    ...props
}) => {

    return (
        <React.Fragment>
            <label className={labelClassName} htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className}
            />    
            {/* <Select option={names}/> testing react-select */}

        </React.Fragment>
    )
};


FormInput.defaultProps = {
    type: "text",
    className: ""
};

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
};



export default FormInput;