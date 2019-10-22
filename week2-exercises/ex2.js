
// Step 1: 
// First object is john 
john = {'age': 30, 'name': 'John'};
console.log(john);
console.log(john['name'], john['age']);
 
// Step 2: 
// Second object is Ruth 
ruth = {'age': 25, 'name': 'Ruth'};
console.log(ruth['age']);
 
// Step 3: 
// Third object is Peter 
peter = {'age': 35, 'name': 'Peter'};
console.log(peter['age']);

// Step 4: 
// Add those three objects to an array that you have to create 

var people = [john, ruth, peter];
console.log(people);

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

