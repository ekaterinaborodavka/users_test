import { ZodiacType } from "~src/types";
import * as yup from "yup";

const maxYear = new Date().getFullYear() - 10;
const minYear = new Date().getFullYear() - 100;
const bloodTypeRegExp = /^[+||-]{1}[1-4]{1}$/;
const birthError = "It doesn't look like the year of birth ";
const bloodError = "It doesn't look like the blood type ";

export const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  yearOfBirth: yup.number().min(minYear, birthError).max(maxYear, birthError),
  email: yup.string().email(),
  zodiac: yup.mixed<ZodiacType>().oneOf(Object.values(ZodiacType)),
  bloodType: yup.string().matches(bloodTypeRegExp, bloodError),
});
