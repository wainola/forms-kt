import React from 'react';
import { RHFormComponent, RHInputControl } from '../components';

export default function Reimbursement() {
  const defaultValues = {
    name: '',
    email: '',
    dni: '',
  };
  const handleSubmit = (data) => console.log('submited data', data);
  return (
    <div className="flex flex-col h-screen justify-center lg:w-full">
      <div className="flex flex-col self-center ml-16 mr-16 border-2 border-red-300 shadow rounded-md h-5/6 text-xl lg:w-2/5">
        <div className="flex flex-row justify-center mt-4 text-2xl italic text-blue-900">
          <h2>Reimbursement</h2>
        </div>
        <div className="flex flex-col ml-16 mr-16">
          <RHFormComponent submit={handleSubmit} defaultValues={defaultValues}>
            <RHInputControl
              name="name"
              label="Names"
              placeholder="Enter your names"
              labelFor="name"
              id="name"
              type="text"
            />
            <RHInputControl
              name="email"
              label="Email"
              placeholder="Enter your email"
              labelFor="email"
              id="email"
              type="text"
            />
            <RHInputControl
              name="dni"
              label="DNI"
              placeholder="Enter your DNI"
              labelFor="dni"
              id="dni"
              type="text"
            />
            <div className="flex flex-row justify-center">
              <button
                className="border-2 pl-10 pr-10 pt-2 pb-2 rounded-md border-pink-700 bg-pink-500 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </RHFormComponent>
        </div>
      </div>
    </div>
  );
}
