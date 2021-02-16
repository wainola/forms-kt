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

  console.log('meta:', meta);

  const handleSelectorChange = function (evt) {
    const {
      target: { value },
    } = evt;
    selectorCallback(value);
    return field.onChange(evt);
  };

  const renderError = (error) => (
    <label className="text-red-500 italic text-base">
      {error !== undefined && error}
    </label>
  );

  const renderSelector = () => {
    return (
      <div className="flex flex-col mt-2 mb-2">
        <label className="mb-2 text-blue-900 text-base" htmlFor={labelFor}>
          {label}
        </label>
        <select
          name={name}
          id={id}
          disabled={!options.length}
          onChange={handleSelectorChange}
          className={`border-2 rounded-md text-base pt-2 pb-2 pl-2 ${
            meta.error !== undefined
              ? 'border-red-500 placeholder-red-500'
              : 'border-grey-300'
          }`}
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
        {renderError(meta.error)}
      </div>
    );
  };

  const renderInputText = () => {
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
          className={`border-2 rounded-md text-base pt-2 pb-2 pl-2 ${
            meta.error !== undefined
              ? 'border-red-500 placeholder-red-500'
              : 'border-gray-300'
          }`}
        />
        {renderError(meta.error)}
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
