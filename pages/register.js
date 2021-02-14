import React from 'react';
import { FormComponent, InputDNI } from '../components';

export default function Register() {
  const formValues = {
    dni: '',
  };

  // HERE I CAN DO THE SUBMITING
  const handleSubmit = async function (values, actions) {
    // evt.preventDefault();
    console.log('values external submit', values);
  };
  return (
    <div>
      <div>
        <h2>Register</h2>
      </div>
      <div>
        <FormComponent formValues={formValues} onSubmit={handleSubmit}>
          <InputDNI
            name="dni"
            type="text"
            placeholder="dni"
            labelFor="dni"
            id="dni"
            label="DNI"
          />
          <button type="submit">Submit</button>
        </FormComponent>
      </div>
    </div>
  );
}
