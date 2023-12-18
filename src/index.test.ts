import { expect, test } from "vitest";
import { greet, type Person } from "./index.js";

test("greet function returns the correct greeting", () => {
  const user1: Person = { firstName: "Amy", lastName: "Jones" };
  const expectedGreeting = "Hello, Amy Jones!";
  const result = greet(user1);
  expect(result).toBe(expectedGreeting);
});
