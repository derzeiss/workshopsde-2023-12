import userCreator, {
  printName as printFirstName,
  printAge as printDOB,
} from "./05-export.js";

console.log(userCreator(), printFirstName(), printDOB());
