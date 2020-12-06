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

export const Checkbox = ({ children, ...props }) => {
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
