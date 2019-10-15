var daysofweek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

// Print the array eleemeents
console.log(daysofweek);

var listOfDaysOfTheWeek = daysofweek.map(function(day){
    return "<li>"+day+"</li>"
});
console.log(listOfDaysOfTheWeek);

listOfDaysOfTheWeek.push("</ul>");
console.log(listOfDaysOfTheWeek);

listOfDaysOfTheWeek.unshift("<ul>");
console.log(listOfDaysOfTheWeek);

var arrayToString = listOfDaysOfTheWeek.join(' ');
console.log(arrayToString);

var element = document.getElementById('content');
element.insertAdjacentHTML('afterbegin', arrayToString);

element.innerHTML = arrayToString;