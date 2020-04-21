/* eslint-env jest */
const fn = require("./simpleBraceExpansion");

test("simpleBraceExpansion", () => {
  expect(
    fn("example.cz")
  ).toEqual([
    "example.cz",
  ]);

  expect(
    fn("example.{cz}")
  ).toEqual([
    "example.cz",
  ]);

  expect(
    fn("example.{cz,sk}")
  ).toEqual([
    "example.cz",
    "example.sk",
  ]);

  expect(
    fn("example.{cz,sk}/something/more")
  ).toEqual([
    "example.cz/something/more",
    "example.sk/something/more",
  ]);
});
