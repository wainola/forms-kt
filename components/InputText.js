import { useField } from 'formik';
import React from 'react';

export default function InputText({
  type = 'text',
  labelFor,
  placeholder,
  id,
  label,
  name,
  options,
  selectorCallback,
}) {
  const [field, meta, helpers] = useField(name);

  const handleChange = function (evt) {
    return field.onChange(evt);
  };

  const handleSelectorChange = (evt) => {
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
          onChange={handleChange}
          className="border-2"
        />
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
