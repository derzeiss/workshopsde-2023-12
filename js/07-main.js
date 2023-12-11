import { checkNumber, checkNumber2, job, randint } from "./07-job.js";

// job().then(console.log);

const testCases = ["test", 1, 2];
// testCases.forEach((p) => {
//   checkNumber(p).then(console.log).catch(console.error);
// });

const task1 = () => {
  job().then(checkNumber).then(console.log).catch(console.error);
};

const task2 = () => {
  job()
    .then((num) => checkNumber2(num))
    .then((num) => console.log(`${num} * 2 = ${num * 2}`))
    .catch((num) => console.error(`Number "${num}" is greater than 5`));
};
