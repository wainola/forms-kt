import React from 'react';
import { Formik, useFormik } from 'formik';

export default function FormComponent({ formValues, onSubmit, children }) {
  // HERE I CAN DO FINAL VALIDATIONS
  const submit = function (values, actions) {
    console.log('values internal submit', values);
    return onSubmit(values, actions);
  };
  return (
    <Formik initialValues={formValues} onSubmit={submit}>
      {(props) => <form onSubmit={props.handleSubmit}>{children}</form>}
    </Formik>
  );
}
