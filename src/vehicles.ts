import { type Person } from "./index.js";

// Challenge Unions: add a new property to `Vehicle` interface (note: change `Car` to `Vehicle` in the interface name) called type which is of type `VehicleType`, which should be a union of the following strings:"car", "truck", "suv", "van", "motorcycle", "boat", "plane", "spaceship", "other". Then, modify the describeVehicle function to include the new property in the returned string:

type VehicleType =
  | "car"
  | "truck"
  | "suv"
  | "van"
  | "motorcycle"
  | "boat"
  | "plane"
  | "spaceship"
  | "other";

// Challenge-Car: Define the Car interface with properties of make as a string, model as a string, year as a number, color as a string, and isElectric as boolean.
// Optional Properties Challenge: Add some optional properties as well.
// Nested Interfaces Challenge: For nested interfaces challenge, import the Person interface and use it to add an owner property to the Car interface:
export interface Vehicle {
  readonly ID: string; // changed to ID to work with new vehicle types
  make: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  drivetrain?: string;
  bodyType?: string;
  seatingMaterial?: string;
  hasSunroof?: boolean;
  safetyFeatures?: string[];
  otherFeatures?: string[];
  owner: Person;
  vehicleType: VehicleType;
}

// write a function called describeCar that takes a `Car` as a parameter and returns a string describing the car:

// Challenge Unions (continued from above): change function name to `describeVehicle` and add `vehicleType` property to the return string:
export function describeVehicle(vehicle: Vehicle): string {
  // use template literals to dynamically create the desired return string and use the ternary operator to determine if the car is electric or not:
  return `This vehicle is a ${vehicle.vehicleType}. It is a ${vehicle.year} ${
    vehicle.make
  } ${vehicle.model} in the color ${vehicle.color} and is ${
    vehicle.isElectric ? "electric" : "not electric"
  }.`;
}
