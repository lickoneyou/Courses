const toLowerCase = (s) => {
  return s.toLowerCase();
}

const toUpperCase = (s) => {
  return s.toUpperCase();
}

export const createSamples = (s) => {
  return toLowerCase(s) + toUpperCase(s);
}