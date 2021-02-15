import { useField } from 'formik';
import React from 'react';

export default function InputControl({
  type = 'text',
  labelFor,
  placeholder,
  id,
  label,
  name,
  options,
  selectorCallback,
  validateFunc,
}) {
  const [field, meta, helpers] = useField({
    name,
    validate: validateFunc,
  });

  // const handleChange = function (evt) {
  //   return field.onChange(evt);
  // };

  // const handleBlur = function (evt) {
  //   const {
  //     target: { value },
  //   } = evt;
  //   if (!value.length) {
  //   }
  // };

  const handleSelectorChange = function (evt) {
    const {
      target: { value },
    } = evt;
    selectorCallback(value);
    return field.onChange(evt);
  };

  const renderSelector = () => {
    return (
      <div className="flex flex-col">
        <label htmlFor={labelFor}>{label}</label>
        <select
          name={name}
          id={id}
          disabled={!options.length}
          onChange={handleSelectorChange}
        >
          {Array.isArray(options) &&
            options.map((e, idx) => {
              return idx !== 0 ? (
                <option key={`${e.id}-${idx}`} value={e.id}>
                  {e.label}
                </option>
              ) : (
                <option key={`${idx}`} value={''}>
                  {`Select a ${name}`}
                </option>
              );
            })}
        </select>
      </div>
    );
  };

  const renderInputText = () => {
    return (
      <div className="flex flex-col">
        <label htmlFor={labelFor}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className={`border-2 ${
            meta.error !== undefined ? 'border-red-300' : 'border-gray-300'
          }`}
        />
        <label className="text-red-500 italic">
          {meta.error !== undefined && meta.error}
        </label>
      </div>
    );
  };

  const renderTypeOfInput = (type) => {
    if (type !== 'select') {
      return renderInputText();
    }
    return renderSelector();
  };

  return renderTypeOfInput(type);
}
