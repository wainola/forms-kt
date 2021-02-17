import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { emailValidation } from '../utils/validations';

export default function RHFormComponent({ submit, defaultValues, children }) {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues,
    resolver: async (data) => {
      console.log('data on validation', data);
      const r = await emailValidation(data.email);
      console.log('data validation', r);

      return {
        values: {},
        errors: {},
      };
    },
  });

  // console.log('errors validations', errors);

  return (
    <div>
      <FormProvider register={register} errors={errors}>
        <form onSubmit={handleSubmit(submit)}>{children}</form>
      </FormProvider>
    </div>
  );
}
