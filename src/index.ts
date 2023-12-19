type AddressType = "Home" | "Work" | "Other";

interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
  addressType: AddressType; // New property using union type
}

export interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  hobbies?: string[];
}

export interface Employee {
  company: string;
  jobTitle: string;
  salary: number;
}

type EmployeePerson = Person & Employee;

export function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

const employee: EmployeePerson = {
  id: 2,
  firstName: "Alice",
  lastName: "Smith",
  age: 28,
  address: {
    street: "456 Main St",
    city: "Metropolis",
    state: "NY",
    zip: 10001,
    addressType: "Home",
  },
  company: "Globex Corporation",
  jobTitle: "Software Developer",
  salary: 100000,
};

console.log(greet(employee)); // Works as employee is a Person
