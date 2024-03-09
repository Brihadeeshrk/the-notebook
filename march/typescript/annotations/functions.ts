const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// the any type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// or another approach, same syntaxx if were working with anonymous fns and normal js fns
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void vs never
// void means we're texhnically not going to return anything, we could return null, undefined etc.,. because they have a value

// never
/*
This code defines a function called throwErr that takes a string argument and returns the type never, indicating that it never produces a 
value and always throws an error with the provided message.

we annotate a fn with never, when we truly know that this function will NEVER return a value
*/
const throwErr = (err: string): never => {
  throw new Error(err);
};

// obj destructuring
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log("this is the date", date);
  console.log("this is the weather", weather);
};
