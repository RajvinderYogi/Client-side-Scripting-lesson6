/* custom Java Script here*/
console.log("App Started");

//initialize my first heading variable
//firstHeading variable creates the link to h1 element
var firstHeading = document.getElementById("firstHeading");
//I can use my firstHeading variable as if it is the element
console.log(firstHeading.textContent); 


//three steps for injecting content onto your page
//step1- create a reference to an element
var FirstParagraph = document.getElementById("FirstParagraph");
//step2- create a variable that contain content
var myContent = "I am A web designer. I design cool websites";
//step3- assign the variable with your content to the refrence variable
FirstParagraph.textContent = myContent;



var SecondParagraph = document.getElementById("SecondParagraph");

var myHTMLContent="<h2> Second Heading</h2>"
                    +"<p>this is an inner paragraph</p>";

SecondParagraph.innerHTML = myHTMLContent;


// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
 console.log("clicked!");
}