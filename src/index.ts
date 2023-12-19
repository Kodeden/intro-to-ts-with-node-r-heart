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

export function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}!`;
}

const me: Person = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  age: 42,
  address: {
    street: "123 Fake St",
    city: "Springfield",
    state: "IL",
    zip: 62701,
    addressType: "Home",
  },
};

console.log(greet(me));
