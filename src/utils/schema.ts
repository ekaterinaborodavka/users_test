import * as yup from "yup";

const today = new Date();
const birthError = "It doesn't look like the year of birth ";
const nameLengthError = "Max length 20 characters";

export const schema = yup.object().shape({
  firstName: yup.string().max(20, nameLengthError),
  lastName: yup.string().max(20, nameLengthError),
  birthday: yup.date().max(today, birthError),
  email: yup.string().email(),
});
