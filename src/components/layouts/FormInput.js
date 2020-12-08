// react
import React from 'react';

// layout, formik
import { useField } from 'formik';

export const TextInput = ({ label, labelClassName, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={labelClassName}>{label}</label>
      <input className="text-input" {...field} {...props}/>
    </>
  );
};

export const CheckbBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props});
  return (
    <div>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const SelectOption = ({label, labelClassName, ...props})=>{
  return(
  <>
      <div>
        <label htmlfor={ props.name || props.name } style={{}} display='block' >color</label>
          <select name="color" value="{values.color}" onchange="{handleChange}" onblur="{handleBlur}" style={{}} display='block'>
            <option value label="Select a color"></option>
            <option value="red" label="red"></option>
            <option value="blue" label="blue"></option>
            <option value="green" label="green"></option>
          </select>
      </div>
    </>    
      )
}
