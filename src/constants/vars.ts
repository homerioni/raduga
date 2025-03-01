import { colors } from './colors';

export const vars = Object.fromEntries([
  ...Object.entries(colors).map((item) => [`--color${item[0]}`, item[1]]),
]);
