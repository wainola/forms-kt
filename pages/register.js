import React, { useState } from 'react';
import { FormComponent, InputDNI, InputText } from '../components';
import { getComunes, getRegions } from '../utils/constants';
import {
  nameValidation,
  emailValidation,
  phoneValidation,
} from '../utils/validations';

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
    const comunesFiltered = getComunes(numbermRegion).map((e) => ({
      label: e.name,
      value: e.name,
      id: e.code,
    }));
    setComunes(comunesFiltered);
  };

  // HERE I CAN DO THE SUBMITING
  const handleSubmit = async function (values, actions) {
    // evt.preventDefault();
    console.log('values external submit', values);
  };
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex flex-col ml-16 mr-16 border-2 border-red-300 shadow rounded-md h-3/6">
        <div className="flex flex-row justify-center">
          <h2>Register</h2>
        </div>
        <div className="flex flex-col ml-16 mr-16">
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
              validateFunc={nameValidation}
            />
            <InputText
              name="email"
              type="email"
              placeholder="Enter your email"
              labelFor="email"
              id="email"
              label="Email"
              validateFunc={emailValidation}
            />
            <InputText
              name="phone"
              type="tel"
              placeholder="Enter your phone (+569 xxxx xxxx)"
              labelFor="phone"
              id="phone"
              label="Phone"
              validateFunc={phoneValidation}
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
    </div>
  );
}
