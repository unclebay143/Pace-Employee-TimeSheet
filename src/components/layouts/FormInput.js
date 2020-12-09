// react
import React from 'react';

// layout, formik
import { useField } from 'formik';

export const TextInput = ({ label, labelClassName, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={labelClassName}>{label}</label>
      <input className="text-input" {...field} {...props}/>
    </>
  );
};

export const CheckbBox = ({ children, ...props }) => {
  const [field] = useField({ ...props});
  return (
    <div>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        <label className={` form-check-label ${props.titleClassName}`} for={props.id}>{props.title}</label>
        {children}
      </label>
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


