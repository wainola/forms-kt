import React from 'react';
import { FormComponent, InputDNI, InputText } from '../components';

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
          <InputText
            name="names"
            type="text"
            placeholder="Enter your names"
            labelFor="names"
            id="names"
            label="Names"
          />
          <InputText
            name="email"
            type="email"
            placeholder="Enter your email"
            labelFor="email"
            id="email"
            label="Email"
          />
          <InputText
            name="phone"
            type="tel"
            placeholder="Enter your phone"
            labelFor="phone"
            id="phone"
            label="Phone"
          />
          <InputText
            name="Region"
            type="selector"
            placeholder="Enter your region"
            labelFor="region"
            id="region"
            label="region"
          />
          <button type="submit">Submit</button>
        </FormComponent>
      </div>
    </div>
  );
}
