// this is an object 
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

// here i make variable from the method inside the object
const myName = person.name();

console.log(person.firstName, person.lastName, person.id, myName);

// here is array
const cars = ["Merssu", "BMW", "Audi", "Lexus", "Volvo"];

console.log(cars);

// here i assign more to array 
cars[6] = "Ford";
// it doesnt matter if i go "out of bounds"
//  it like vector yes
console.log(cars);

// and i may or may not put something in between
cars[5] = "Subaru";

console.log(cars);

// here class
class car {
    // always need constructor
    constructor(model, year) {
        // constructor need the properties and make them themselves
        this.model = model,
        this.year = year;
    };
};

// here i make objects from class with new operator
let myCar1 = new car("Audi", 2018);
let myCar2 = new car("Ford", 2015)

console.log(myCar1, myCar2);