/**
 * Checks if the current month is between November and February
 * @returns {boolean} true if winter, false otherwise
 */
export const isWinter = (): boolean => {
  const now = new Date();
  return now.getMonth() >= 11 || now.getMonth() < 2;
};
