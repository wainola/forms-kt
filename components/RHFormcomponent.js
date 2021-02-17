import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  dniValidator,
  emailValidation,
  nameValidation,
} from '../utils/validations';

export default function RHFormComponent({ submit, defaultValues, children }) {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues,
    resolver: async (data) => {
      const { name, email, dni } = data;
      const emailValidationResult = await emailValidation(email);
      const nameValidationResult = await nameValidation(name);
      const dniValidationResult = await dniValidator(dni);

      // IF THERE IS AN ERROR SEND THE ERROR AND NOT THE VALUES
      if (
        nameValidationResult ||
        emailValidationResult ||
        dniValidationResult
      ) {
        return {
          values: {},
          errors: {
            name: !nameValidationResult
              ? { message: undefined }
              : { message: nameValidationResult },
            email: !emailValidationResult
              ? { message: undefined }
              : { message: emailValidationResult },
            dni: !dniValidationResult
              ? { message: undefined }
              : { message: dniValidationResult },
          },
        };
      } else {
        // RETURN JUST THE VALUES FOR SUBMISSION
        return {
          values: { ...data },
          errors: {},
        };
      }
    },
  });

  useEffect(() => {
    const { isSubmitSuccessful } = methods.formState;
    if (isSubmitSuccessful) {
      methods.reset();
    }
  }, [methods.formState]);

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
      </FormProvider>
    </div>
  );
}
