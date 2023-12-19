// Define the Car interface with properties of make as a string, model as a string, year as a number, color as a string, and isElectric as boolean. Add some optional properties as well:
export interface Car {
  readonly VIN: string;
  make: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  drivetrain: string;
  bodyType: string;
  seatingMaterial?: string;
  hasSunroof?: boolean;
  safetyFeatures?: string[];
  otherFeatures?: string[];
}

// write a function called describeCar that takes a `Car` as a parameter and returns a string describing the car:
export function describeCar(car: Car): string {
  // use template literals to dynamically create the desired return string and use the ternary operator to determine if the car is electric or not:
  return `This vehicle is a ${car.year} ${car.make} ${car.model} in the color ${
    car.color
  } and is ${car.isElectric ? "electric" : "not electric"}.`;
}
