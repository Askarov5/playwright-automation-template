// DATE
export const getOnlyDate = (date: Date): string =>
  new Date(date).toISOString().split('T')[0];

export const addYearsToDate = (date: Date, years: number): string => {
  date.setFullYear(date.getFullYear() + years);
  return date.toISOString();
};

export const subtructYearsToDate = (date: Date, years: number): string => {
  date.setFullYear(date.getFullYear() - years);
  return date.toISOString();
};

// STRING
export const generateRandomString = (length: number) => {
  let randomString = '';
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = chars.length;
  let counter = 0;
  while (counter < length) {
    randomString += chars.charAt(Math.floor(Math.random() * charsLength));
    counter += 1;
  }
  return randomString;
};

export const camelCase = (prop: string) =>
  prop.charAt(0).toLowerCase() + prop.slice(1);

type TYesOrNo = 'Y' | 'N';
export const conversionYNStringToBoolean = (yesOrNo: TYesOrNo) =>
  yesOrNo === 'Y' ? true : false;

export const convertNullAmountAsZero = (amount: number) => {
  if (amount == null) {
    return 0.0;
  }
  return amount;
};

export const trimNullable = (str: string) => {
  if (str == null) return null;

  if (str) {
    if (str.toLowerCase().trim() !== 'null') return str.trim();
  }

  return '';
};
