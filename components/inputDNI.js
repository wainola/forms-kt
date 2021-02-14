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
}) {
  const [field, meta, helpers] = useField(name);

  const handleChange = function (evt) {
    console.log('here validatin');
    return field.onChange(evt);
  };

  console.log('data', meta);
  return (
    <div className="flex flex-col">
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className="border-2"
      />
    </div>
  );
}
