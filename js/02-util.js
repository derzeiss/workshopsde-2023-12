/** 02 Executing Functions Directly & Indirectly */
const task2 = () => {
  function double(n) {
    return n * 2;
  }

  function transform(n, fn) {
    if (typeof fn !== "function") return;
    return fn(n);
  }

  console.log(transform(2, double));

  console.log(
    transform(4, function (n) {
      return n * 2;
    })
  );
};

/** 03 map() */
const task3 = () => {
  const transformOToObjects = (nums) => nums.map((n) => ({ val: n }));

  console.log(transformOToObjects([1, 2, 3, 4]));
};

/** 04 Arrow Functions and reduce */
const task4 = () => {
  const doubleAndSquareAndSum = (numArr) =>
    numArr
      .map((n) => n * 2)
      .map((n) => Math.pow(n, 2))
      .reduce((sum, n) => sum + n, 0);

  const doubleAndSquareAndSumOneLine = (numArr) =>
    numArr.reduce((sum, n) => sum + Math.pow(n * 2, 2), 0);

  // Performance vs. readability

  console.log(doubleAndSquareAndSum([2, 4, 5]));
  console.log(doubleAndSquareAndSumOneLine([2, 4, 5]));
};

/** 06 Remove false values from a given array */
const task6 = () => {
  const compact = (arr) => arr.filter((el) => !!el);

  console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]));
};

task6();
