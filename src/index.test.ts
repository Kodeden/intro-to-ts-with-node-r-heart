import { expect, test } from "vitest";
import { greet } from "./index.js";

test("greet function returns the correct greeting", () => {
  const personName = "Amy";
  const expectedGreeting = "Hello, Amy";
  const result = greet(personName);
  expect(result).toBe(expectedGreeting);
});
