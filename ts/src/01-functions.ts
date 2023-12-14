// Solution
const solution1 = () => {
  function allPeople(trainerData: string[], attendeeData: string[]) {
    const result: string[] = [];
    return result.concat(trainerData, attendeeData);
  }

  const trainers = ["Joe", "Toni"];
  const attendees = ["Max", "Sepp", "Arno", "Otto"];

  const allTogether: string[] = allPeople(trainers, attendees);
};

// Advanced solution with TypeGuards and filtering
const solution2 = () => {
  function allPeople(trainerData: string[], attendeeData: unknown[]): string[] {
    if (isStringArray(attendeeData)) {
      return trainerData.concat(attendeeData);
    } else {
      const attendeeDataString = attendeeData.filter(
        (e) => typeof e === "string"
      ) as string[];
      return trainerData.concat(attendeeDataString);
    }
  }

  const isStringArray = (arr: unknown[]): arr is string[] => {
    return arr.every((i) => typeof i === "string");
  };

  const trainers = ["Joe", "Toni"];
  const attendees = ["Max", "Sepp", "Arno", "Otto", 1];

  const allTogether: string[] = allPeople(trainers, attendees);

  console.log(allTogether);
};

// This tells typescript that this is a module file instead of a global js file.
// Otherwise we wouldn't be able to redefine local variables (e.g. "attendees") in other filles
export {};
