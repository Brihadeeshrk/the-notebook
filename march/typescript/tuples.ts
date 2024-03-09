const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// how to represent this as a tuple?

// but what is a tuple? a tuple is an array like structure where every element represents a record or a value
// an example, we could have a carsArray where every ele has a diff car
// but in a tuple, all the eles in int, describe one object

// hence, the drink example. how do we convert this into a tuple
const pepsi = ["brown", true, 40]; //this is an array

// were stating that, this array will always have a consistent format, a str, a bool and a number, which makes this now a tuple
const pepsiTuple: [string, boolean, number] = ["brown", true, 40];

// instead of annotating a possiblky long tuple in the defn, we can type alias it
type Drink = [string, boolean, number];

const pepsiTuple2: Drink = ["brown", true, 40];

// why dont we use tuples regularly?
// lets go through with an example

const carSpecs: [number, number] = [400, 3354];
// for the above ex, we have a tuple that has 2 values for carspecs. we only know that the 2 values are numbers. we dont know what they mean, or what they represent. so its pretty much impossible for us to even
// fix it if its wrong, because we just dont know what they are to fix them

// but this example, clearly states that the horsepower is 400, and the weight is 3354kg
const carStats = {
  horsepower: 400,
  weight: 3354,
};
