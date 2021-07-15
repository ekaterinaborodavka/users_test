export enum ZodiacType {
  // eslint-disable-next-line no-unused-vars
  aries = "aries",
  // eslint-disable-next-line no-unused-vars
  taurus = "aurus",
  // eslint-disable-next-line no-unused-vars
  gemini = "gemini",
  // eslint-disable-next-line no-unused-vars
  cancer = "cancer",
  // eslint-disable-next-line no-unused-vars
  leo = "leo",
  // eslint-disable-next-line no-unused-vars
  virgo = "virgo",
  // eslint-disable-next-line no-unused-vars
  libra = "libra",
  // eslint-disable-next-line no-unused-vars
  scorpio = "scorpio",
  // eslint-disable-next-line no-unused-vars
  sagittarius = "sagittarius",
  // eslint-disable-next-line no-unused-vars
  capricorn = "capricorn",
  // eslint-disable-next-line no-unused-vars
  aquarius = "aquarius",
  // eslint-disable-next-line no-unused-vars
  pisces = "pisces",
}

export enum BloodType {
  // eslint-disable-next-line no-unused-vars
  firstPlus = "O(I) Rh+",
  // eslint-disable-next-line no-unused-vars
  firstMinus = "O(I) Rh1",
  // eslint-disable-next-line no-unused-vars
  secondPlus = "A(II) Rh+",
  // eslint-disable-next-line no-unused-vars
  secondMinus = "A(II) Rh-",
  // eslint-disable-next-line no-unused-vars
  thirdPlus = "B(III) Rh+",
  // eslint-disable-next-line no-unused-vars
  thirdMinus = "B(III) Rh-",
  // eslint-disable-next-line no-unused-vars
  fourthPlus = "AB(IV) Rh+",
  // eslint-disable-next-line no-unused-vars
  fourthMinus = "AB(IV) Rh-",
}

export interface SelectOptions {
  id: number;
  name: ZodiacType | BloodType;
}

export const bloods = [
  {
    id: 1,
    name: BloodType.firstPlus,
  },
  {
    id: 2,
    name: BloodType.firstMinus,
  },
  {
    id: 3,
    name: BloodType.secondPlus,
  },
  {
    id: 4,
    name: BloodType.secondMinus,
  },
  {
    id: 5,
    name: BloodType.thirdPlus,
  },
  {
    id: 6,
    name: BloodType.thirdMinus,
  },
  {
    id: 7,
    name: BloodType.fourthPlus,
  },
  {
    id: 8,
    name: BloodType.fourthMinus,
  },
];

export const zodiacs = [
  {
    id: 1,
    name: ZodiacType.aquarius,
  },
  {
    id: 2,
    name: ZodiacType.aries,
  },
  {
    id: 3,
    name: ZodiacType.cancer,
  },
  {
    id: 4,
    name: ZodiacType.capricorn,
  },
  {
    id: 5,
    name: ZodiacType.gemini,
  },
  {
    id: 6,
    name: ZodiacType.leo,
  },
  {
    id: 7,
    name: ZodiacType.libra,
  },
  {
    id: 8,
    name: ZodiacType.pisces,
  },
  {
    id: 9,
    name: ZodiacType.sagittarius,
  },
  {
    id: 10,
    name: ZodiacType.scorpio,
  },
  {
    id: 11,
    name: ZodiacType.taurus,
  },
  {
    id: 12,
    name: ZodiacType.virgo,
  },
];

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  zodiac?: ZodiacType;
  bloodType?: string;
  avatar: string;
  img?: string;
  color: string;
}

export enum PathName {
  // eslint-disable-next-line no-unused-vars
  home = "/",
  // eslint-disable-next-line no-unused-vars
  create = "/create",
}
