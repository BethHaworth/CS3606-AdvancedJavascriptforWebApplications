//create an array called numbers that has values 1, 2, 3 
//initialize a new empty array called numbersplusone

var numbers = [ 1, 2, 3 ];
var numbersplusone = [];

//iterate through each element of numbers array in the original array

var numberlength = numbers.length;

for ( var i = 0; i < numberlength; i++ ){
    numbersplusone[i] = numbers[i] + 1;
}

console.log(numbersplusone);


//alter that element adding 1 and put the altered value into the new array
//final aray should have [2, 3, 4]
//debug the final value and show it on the console