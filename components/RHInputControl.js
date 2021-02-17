import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function RHInputControl({
  label,
  labelFor,
  placeholder,
  type = 'text',
  name,
  id,
}) {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col mt-2 mb-2">
      <label htmlFor={labelFor} className="mb-2 text-blue-900 text-base">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register}
        className={`border-2 rounded-md text-base pt-2 pb-2 pl-2`}
      />
    </div>
  );
}
