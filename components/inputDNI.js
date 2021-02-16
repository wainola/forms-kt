import { useField } from 'formik';
import React from 'react';

export default function InputDNI({
  type = 'text',
  labelFor,
  placeholder,
  id,
  label,
  name,
  validateFunc,
}) {
  const [field, meta] = useField({
    name,
    validate: validateFunc,
  });

  const renderError = (error) => (
    <label className="text-red-500 italic text-base">
      {error !== undefined && error}
    </label>
  );

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
        onChange={field.onChange}
        onBlur={field.onBlur}
        // onFocus={onFocus}
        className={`border-2 rounded-md text-base pt-2 pb-2 pl-2 ${
          meta.error !== undefined
            ? 'border-red-500 placeholder-red-500'
            : 'border-gray-300'
        }`}
        value={field.value}
      />
      {renderError(meta.error)}
    </div>
  );
}
