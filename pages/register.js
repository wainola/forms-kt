import React, { useState } from 'react';
import { FormComponent, InputDNI, InputControl } from '../components';
import { getComunes, getRegions } from '../utils/constants';
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  regionValidator,
  comuneValidator,
  dniValidator,
} from '../utils/validations';

export default function Register() {
  const [comunes, setComunes] = useState([]);
  const formValues = {
    identity: '',
    names: '',
    email: '',
    phone: '',
    region: '',
    comune: '',
  };
  const regions = getRegions;

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
    console.table(values);
    return cleanForm(actions);
  };

  const cleanForm = async (actions) => {
    await actions.setSubmitting(false);
    await actions.resetForm();
  };

  return (
    <div className="flex flex-col h-screen justify-center lg:w-full">
      <div className="flex flex-col self-center ml-16 mr-16 border-2 border-red-300 shadow rounded-md h-5/6 text-xl lg:w-2/5">
        <div className="flex flex-row justify-center mt-4 text-2xl italic text-blue-900">
          <h2>Register</h2>
        </div>
        <div className="flex flex-col ml-16 mr-16">
          <FormComponent
            formValues={formValues}
            onSubmit={handleSubmit}
            validationOnChange={false}
            validationOnBlur={false}
          >
            <InputDNI
              name="identity"
              type="text"
              placeholder="DNI (11.111.111-2)"
              labelFor="identity"
              id="identity"
              label="Enter your DNI"
              validateFunc={dniValidator}
            />
            <InputControl
              name="names"
              type="text"
              placeholder="Enter your names"
              labelFor="names"
              id="names"
              label="Names"
              validateFunc={nameValidation}
            />
            <InputControl
              name="email"
              type="email"
              placeholder="Enter your email"
              labelFor="email"
              id="email"
              label="Email"
              validateFunc={emailValidation}
            />
            <InputControl
              name="phone"
              type="tel"
              placeholder="Enter your phone (+569 xxxx xxxx)"
              labelFor="phone"
              id="phone"
              label="Phone"
              validateFunc={phoneValidation}
            />
            <InputControl
              name="region"
              type="select"
              placeholder="Enter your region"
              labelFor="region"
              id="region"
              label="Region"
              options={regions}
              selectorCallback={searchComunes}
              validateFunc={regionValidator}
            />
            <InputControl
              name="comune"
              type="select"
              placeholder="Enter your comune"
              labelFor="comune"
              id="comune"
              label="Comune"
              options={comunes}
              validateFunc={comuneValidator}
            />
            <div className="flex flex-row justify-center">
              <button
                className="border-2 pl-10 pr-10 pt-2 pb-2 rounded-md border-blue-700 bg-blue-500 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </FormComponent>
        </div>
      </div>
    </div>
  );
}
