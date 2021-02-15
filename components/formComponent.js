import React from 'react';
import { Formik, useFormik } from 'formik';

export default function FormComponent({ formValues, onSubmit, children }) {
  // HERE I CAN DO FINAL VALIDATIONS
  const submit = function (values, actions) {
    console.log('values internal submit', values);
    return onSubmit(values, actions);
  };
  return (
    <Formik
      initialValues={formValues}
      onSubmit={submit}
      validateOnChange={false}
    >
      {(props) => {
        // console.log('props', props);
        return (
          <form onSubmit={props.handleSubmit} {...props}>
            {children}
          </form>
        );
      }}
    </Formik>
  );
}
