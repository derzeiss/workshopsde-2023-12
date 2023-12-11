/**
 * Generates a random integer in [min, max[.
 * If max is omitted, generates a integer in [0, min[
 * @param {number} min
 * @param {number|undefined} max
 * @returns A random integer in [min,max[
 */
export const randint = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(min + Math.random() * (max - min));
};

export const job = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randint(10));
    }, 2000);
  });
};

export const checkNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") return reject("error");
    if (num % 2 === 1) return setTimeout(() => resolve("odd"), 1000);
    setTimeout(() => resolve("even"), 2000);
  });
};

export const checkNumber2 = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") return reject("error");
    if (num > 5) return reject(num);
    return resolve(num);
  });
};
