import { useField } from 'formik';
import React from 'react';

export default function InputDNI({
  type = 'text',
  labelFor,
  placeholder,
  id,
  onChange,
  onBlur,
  onFocus,
  label,
  name,
  validateFunc,
}) {
  const [field, meta, helpers] = useField({
    name,
    validate: validateFunc,
  });

  const handleChange = function (evt) {
    console.log('here validatin');
    return field.onChange(evt);
  };

  // console.log('data', meta);
  return (
    <div className="flex flex-col mt-2 mb-2">
      <label className="mb-2 text-blue-900 text-base" htmlFor={labelFor}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={`border-2 rounded-md text-base pt-2 pb-2 pl-2 ${
          meta.error !== undefined ? 'border-red-300' : 'border-gray-300'
        }`}
      />
    </div>
  );
}
