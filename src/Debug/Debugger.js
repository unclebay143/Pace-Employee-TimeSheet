// create your debugging code here


// formik JSON inspector 
export const FormikDebugger = (values) =>{
  return (
    <>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </>
  )
}