import * as Yup from 'yup';

const getError = (error) => {
  const {
    errors: [errorMsg],
  } = error;
  return errorMsg;
};

export const nameValidation = (names) => {
  console.log('validating', names);
  if (!names.length) return 'No names where addded';
  if (names.split(' ').length !== 2)
    return 'Either you added your name or your lastname';
  return undefined;
};

export const emailValidation = async (email) => {
  const emailValidation = Yup.string()
    .email('Invalid email address')
    .required('Must add an email address');

  try {
    await emailValidation.validate(email);
    return undefined;
  } catch (error) {
    return getError(error);
  }
};

export const phoneValidation = async (phone) => {
  const phoneValidation = Yup.string()
    .length(12, 'Enter a valid phone number (use +56)')
    .required('You must enter a phone number');

  try {
    await phoneValidation.validate(phone);
    return undefined;
  } catch (error) {
    return getError(error);
  }
};

export const regionValidator = async (region) => {
  const regionValidator = Yup.string().required('You must select a region');

  try {
    await regionValidator.validate(region);
    return undefined;
  } catch (error) {
    return getError(error);
  }
};

export const comuneValidator = async (comune) => {
  const comuneValidator = Yup.string().required('You must select a comune');

  try {
    await comuneValidator.validate(comune);
    return undefined;
  } catch (error) {
    return getError(error);
  }
};