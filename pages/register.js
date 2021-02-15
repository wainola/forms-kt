import React, { useEffect, useState } from 'react';
import { FormComponent, InputDNI, InputText } from '../components';
import { getComunes, getRegions } from '../utils/constants';

export default function Register() {
  const [comunes, setComunes] = useState([]);
  const regions = getRegions;

  const formValues = {
    dni: '',
    names: '',
    email: '',
    phone: '',
    region: '',
    comune: '',
  };

  const searchComunes = (numbermRegion) => {
    const comunesFiltered = getComunes(numbermRegion);
    console.log('numberRegion', comunesFiltered);
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
            name="region"
            type="select"
            placeholder="Enter your region"
            labelFor="region"
            id="region"
            label="region"
            options={regions}
            selectorCallback={searchComunes}
          />
          <InputText
            name="comune"
            type="select"
            placeholder="Enter your comune"
            labelFor="comune"
            id="comune"
            label="comune"
            options={comunes}
          />
          <button type="submit">Submit</button>
        </FormComponent>
      </div>
    </div>
  );
}
