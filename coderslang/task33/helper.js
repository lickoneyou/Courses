export const getLesserEvil = (threat1, threat2) => {
  return threat1.evilFactor < threat2.evilFactor? threat1: threat2;
}