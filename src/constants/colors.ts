export const colors = {
  Text: '#222222',
  Bg: '#FFFFFF',
  Purple: '#7d64c3',
  PurpleLight: '#8d70dc',
  PurpleBorder: '#8D70DC4C',
  PurpleShadow: '#7D64C319',
} as const;

export const colorVars = Object.fromEntries(
  Object.entries(colors).map((item) => [`--color${item[0]}`, item[1]])
);
