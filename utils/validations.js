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

export const dniValidator = async (dni) => {
  const dniCleaned = dni.replace(/\./gm, '').replace(/\-/gm);

  const matrix = [2, 3, 4, 5, 6, 7];

  const numbers = dniCleaned.substring(0, dniCleaned.length - 1).split('');
  const vd = dniCleaned[dniCleaned.length];

  let counter = 0;
  const sum = numbers.reduceRight((acc, num) => {
    if (counter === matrix.length - 1) {
      acc += parseInt(num, 10) * matrix[counter];
      counter = 0;
      return acc;
    }

    acc += parseInt(num, 10) * matrix[counter];
    counter++;
    return acc;
  }, 0);

  return 11 - (sum % 11) === parseInt(vd, 10) ? undefined : 'blah';
};
