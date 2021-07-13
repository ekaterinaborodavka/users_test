import { ZodiacType } from "~src/types";
import * as yup from "yup";

const maxYear = new Date().getFullYear() - 10;
const minYear = new Date().getFullYear() - 100;
const bloodTypeRegExp = /^[+||-]{1}[1-4]{1}$/;

export const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  yearOfBirth: yup
    .number()
    .min(minYear, "It doesn't look like the year of birth ")
    .max(maxYear, "It doesn't look like the year of birth "),
  email: yup.string().email(),
  zodiac: yup.mixed<ZodiacType>().oneOf(Object.values(ZodiacType)),
  bloodType: yup.string().matches(bloodTypeRegExp, "It doesn't look like the blood type "),
});
