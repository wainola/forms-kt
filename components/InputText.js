import { useField } from 'formik';
import React from 'react';

export default function InputText({
  type = 'text',
  labelFor,
  placeholder,
  id,
  label,
  name,
}) {
  const [field, meta, helpers] = useField(name);

  const handleChange = function (evt) {
    return field.onChange(evt);
  };
  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
