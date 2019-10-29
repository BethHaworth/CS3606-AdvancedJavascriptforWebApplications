
// The elements to attach "click" handlers to
var docBody = document.body, 
 parentElement = document.getElementById('parent'), 
 childElement = document.getElementById('child'); 

parentElement.addEventListener('click', function (event) { 
    console.log("I am the " + event.target.textContent);
    event.stopPropagation();
}); 

docBody.addEventListener('click', function (event1) { 
    console.log("I am the " + event1.currentTarget.nodeName);
    event1.stopPropagation();
}); 

/*
Add event handlers to #child that listenS 
for the mouseleave event, which does not bubble
*/

childElement.addEventListener('mouseleave', function (event2) { 
    console.log("I am the " + event2.currentTarget.textContent);
    event2.stopPropagation();
}); 