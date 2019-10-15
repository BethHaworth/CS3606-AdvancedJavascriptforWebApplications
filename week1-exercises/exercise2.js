var button = document.getElementById("goBtn");
//Get the element with ID=goBtn

//Add an event listener when the user clicks on the button go to execute the
button.addEventListener("click", goPage);

//This function determines which page is selected and goes to it.
function goPage(event) {
    var e = document.getElementById("pages");
    console.log(e);
     //Get the element that has ID pages
    
    //The following will give you the selected value
    var page = e.options[e.selectedIndex].value;

    //Redirect to a new page using window.location command
    window.location = page;
}