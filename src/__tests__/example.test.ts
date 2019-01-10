import add from "../example";
import cases from "jest-in-case";

test("AddFunction", () => {
  expect(add(1, 2)).toBe(3);
});

cases(
  "AddFunction",
  ({ numberFirst, numberSecond, additionResult }) => {
    expect(add(numberFirst, numberSecond)).toBe(additionResult);
  },
  {
    "adding positive integers": {
      numberFirst   : 1,
      numberSecond  : 2,
      additionResult: 3,
    },
    "adding negative integers": {
      numberFirst   : -1,
      numberSecond  : -2,
      additionResult: -3,
    },
    "adding positive and negative integers": {
      numberFirst   : -1,
      numberSecond  : 2,
      additionResult: 1,
    },
    "adding positive floats": {
      numberFirst   : 1.5,
      numberSecond  : 2.4,
      additionResult: 3.9,
    },
    "adding negative floats": {
      numberFirst   : -1.5,
      numberSecond  : -2.4,
      additionResult: -3.9,
    },
    "adding positive and negative floats": {
      numberFirst   : -1.5,
      numberSecond  : 2.4,
      additionResult: 0.9,
    },
  },
);
