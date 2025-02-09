import sum from "./sum";

test("testing sum function", () => {
  //test and expect is part oof jest testing library
  let a = 10;
  let b = 20;
  let output = 30;
  expect(sum(a, b)).toBe(output);
});
test("testing sum function2", () => {
  let a = 100;
  let b = 200;
  let output = 300;
  expect(sum(a, b)).toBe(output);
});
