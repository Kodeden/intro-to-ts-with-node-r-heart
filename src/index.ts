export interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  hobbies?: string[];
}

export function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

const me: Person = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 42,
};

console.log(greet(me));
