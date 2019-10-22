// using object.create


// Objects exercise 
// Create three objects 
// All Objects have the same properties 
// Age, Name 

var person = {
// initialize the pastry
    init: function (name, age) {
        this.name = name;
        this.age = age;
    },
}

var john = Object.create(person);
john.init("john", 30);

var ruth = Object.create(person);
ruth.init("ruth", 25);
var peter = Object.create(person);
peter.init("peter", 35);

console.log(john);
console.log(ruth);
console.log(peter);

// Step 4: 
// Add those three objects to an array that you have to create 
var people = [john, ruth, peter]
console.log(people)

//Find oldest and youngest

var ages = [john.age, ruth.age, peter.age];
console.log(ages);

var sorted = ages.sort();
console.log(sorted);

var highestNum = sorted.pop();
console.log(highestNum);

var oldestPerson = people.filter(people => people.age === highestNum)[0];
console.log(oldestPerson.name);

var reverseSort = sorted.reverse();
console.log(reverseSort);

var lowestNum = reverseSort.pop();
console.log(lowestNum);

var youngestPerson = people.filter(people => people.age === lowestNum)[0];
console.log(youngestPerson.name);

