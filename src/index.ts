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
// commented out because it is part of Intersection Types lesson but not the challenge:
// export interface Employee {
//   company: string;
//   jobTitle: string;
//   salary: number;
// }

// commented out because it is part of Intersection Types lesson but not the challenge:
// type EmployeePerson = Person & Employee;

// Intersection Types Challenge: create a new interface called `Student` that has the following properties: university - string, major - string, graduationYear - string:

export interface Student {
  university: string;
  major: string;
  graduationYear: string;
}

// Intersection Types Challenge, continued: create a new type called `StudentPerson` that is an intersection of `Person` and `Student`:
export type StudentPerson = Person & Student;

// Intersection Types Challenge, continued: create a new student object that is of type StudentPerson and pass it to the greet function:
export function greet(studentPerson: StudentPerson): string {
  return `Hello, ${studentPerson.firstName} ${studentPerson.lastName} of ${studentPerson.university}'s class of ${studentPerson.graduationYear}!`;
}

const student: StudentPerson = {
  id: 15,
  firstName: "Joan",
  lastName: "Doe",
  age: 21,
  address: {
    street: "123 Main St",
    city: "Metropolis",
    state: "NY",
    zip: 10001,
    addressType: "Other",
  },
  university: "Harvard",
  major: "Computer Science",
  graduationYear: "2024",
};

console.log(greet(student));

// commented out because it is part of Intersection Types lesson but not the challenge:
// const employee: EmployeePerson = {
//   id: 2,
//   firstName: "Alice",
//   lastName: "Smith",
//   age: 28,
//   address: {
//     street: "456 Main St",
//     city: "Metropolis",
//     state: "NY",
//     zip: 10001,
//     addressType: "Home",
//   },
//   company: "Globex Corporation",
//   jobTitle: "Software Developer",
//   salary: 100000,
// };

// console.log(greet(employee)); // Works as employee is a Person
