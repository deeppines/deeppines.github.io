/**
 * Checks if the current month is between November and February
 * @param {Date} date - The date to check
 * @returns {boolean} true if winter, false otherwise
 */
export const isWinter = (date?: Date): boolean => {
  const now = date || new Date();

  return now.getMonth() >= 11 || now.getMonth() < 2;
};
