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
  const [field, meta] = useField({ ...props, type: 'checkbox' });
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

export const SelectOption = ({children, name, labelClassName, ...props})=>{
  return(
  <>
      <div>
        <label htmlfor={ props.name || props.id } style={{}} display='block' >color</label>
          <select name={props.name} value={props.value} display='block'>
            {children}
          </select>
      </div>
    </>    
      )
}
