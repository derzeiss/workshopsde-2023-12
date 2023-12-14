// 01) Create an interface for the attendees data set
// 02) Hobbies should be optional all others are required
// 03) Allow only Visual Studio Code or IntelliJ as editor

interface Attendee {
  name: string;
  company: string;
  age: number;
  hasTypeScriptExperience: boolean;
  hobbies?: string[];
  editor: "Visual Studio Code" | "IntelliJ";
}

const attendees: Attendee[] = [
  {
    name: "Otto",
    company: "Google",
    age: 33,
    hasTypeScriptExperience: false,
    hobbies: ["Playing Guitar", "Dancing"],
    editor: "Visual Studio Code",
  },
  {
    name: "Maria",
    company: "Tesla",
    age: 24,
    hasTypeScriptExperience: true,
    hobbies: ["Traveling", "Reading Books"],
    editor: "IntelliJ",
  },
  {
    name: "Sina",
    company: "Spiegel Online",
    age: 39,
    hasTypeScriptExperience: true,
    editor: "IntelliJ",
  },
];

/** Generics vs. any */

const genericFn = <T>(param: T) => {
  // param = 1; // ERROR: Type 'number' is not assignable to type 'T'. // 'T' could be instantiated with an arbitrary type which could be unrelated to 'number'.ts(2322)
  return param;
};

// Using any here because ....
const anyFn = (param: any) => {
  if (Math.random() > 0.5) {
    param = 1;
  } else {
    param = true;
  }
  return param;
};

/** class solution (not recommended) */

class CAttendee {
  name: string;
  company: string;
  age: number;
  hasTypeScriptExperience: boolean;
  hobbies?: string[];
  editor: "Visual Studio Code" | "IntelliJ";

  constructor(
    name: string,
    company: string,
    age: number,
    hasTypeScriptExperience: boolean,
    editor: "Visual Studio Code" | "IntelliJ",
    hobbies?: string[]
  ) {
    this.name = name;
    this.company = company;
    this.age = age;
    this.hasTypeScriptExperience = hasTypeScriptExperience;
    this.hobbies = hobbies;
    this.editor = editor;
  }
}

const a = new CAttendee("ott", "google", 33, false, "Visual Studio Code", [
  "playing guitar",
  "dancing",
]);
