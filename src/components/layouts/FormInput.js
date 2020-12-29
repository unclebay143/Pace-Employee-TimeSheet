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
        <label className={` form-check-label ${props.titleclassname}`} htmlFor={props.id}>{props.title}</label>
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


 // Textarea component
export const TextArea = ({ label, resize, labelClassName, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id} className={labelClassName}>{label}</label>
      <textarea 
          className="text-input" 
          {...field} 
          {...props}
        />
    </>
  );
};

// Datalist component
export const DataList = ({label, children, name, labelClassName, ...props})=>{
  return(
  <>
      <div>
        <label htmlFor={ props.id } style={{}} display='block' >{ label }</label>
          <datalist name={props.name} value={props.value} display='block'>
           <option> {children}</option>
          </datalist>
      </div>
    </>    
      )
}

// this is rough, will clean up once i'm done sorting it out
export const Datalist = ({label,id, value, key, children, name, labelClassName, ...props})=>{
  return(
  <>
      <div>
        <label htmlFor={ props.id } style={{}} display='block' >{ label }</label>
          {/* <datalist> */}
          <datalist id= {id}>
            {/* {props.name.map((designation) => { */}
              {/* return ( */}
                <option
                  value={value}
                  key={key}
                  // value={`${name.id}`}
                  // key={`${name.id}`}
                >
                  {/* {`${designation.designation_title}`} */}
                </option>
              {/* ); */}
            {/* })} */}
  </datalist>
      </div>
    </>    
      )
}


