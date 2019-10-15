var primaryNav = document.getElementById("primary-nav");// Get the element primary-nav 

//Declare two variables buttonNode, and toggleButton
var butttonNode;
var toggleButton;

// Using document.create element, create a span element and assing the value to buttonNode variable
buttonNode = document.createElement('span');

// every element has a textContent property, xelement.textContent = "value to show between tags"
// Use that method, to dispay 'Show menu' for the button 
buttonNode.textContent = 'Show menu';

//Add class 'menu-toggle' to a button
buttonNode.classList.add('menu-toggle');

//Using insertAdjacentElement add afterbegin the buttonNode element and pass it to toggleButton variable
toggleButton = primaryNav.insertAdjacentElement('afterbegin', buttonNode);

toggleButton.addEventListener('click', function () {
    // Toggle the button text if the value of toggleButton.textContent is "Show menu"

    if (toggleButton.textContent === 'Show menu') {
        toggleButton.textContent = 'Hide menu'
        } else {
        toggleButton.textContent = 'Show menu'
        }

    });