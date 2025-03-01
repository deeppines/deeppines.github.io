export const isWinter = (): boolean => {
  const now = new Date();
  return now.getMonth() >= 11 || now.getMonth() < 2;
};
