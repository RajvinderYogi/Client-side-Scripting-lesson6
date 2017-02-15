/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE

  let data = {
  "games": [
    {
      "name": "Fallout 4",
      "cost": 69.99,
      "rating": 4.3
    },
    {
      "name": "Overwatch",
      "cost": 49.99,
      "rating": 4.5
    },
    {
      "name": "Horizon Zero Dawn",
      "cost": 69.99,
      "rating": 4.1
    }
  ]
};


  switch (document.title) {
    case "Home":
      let gameListBody = document.getElementById("gameListBody");

      // for each game in data.games repeat
      data.games.forEach(function(game) {
        // inject a "template row" inside the dataRows div tag
        let newRow = document.createElement("tr");

        newRow.innerHTML = `
          <td>${game.name}</td>
          <td class="text-center">${game.cost}</td>
          <td class="text-center">${game.rating}</td>
        `;

        gameListBody.appendChild(newRow);

      }, this);

      break;

    case "Projects":

      // Step 1 - Setup references to the elements you need to hook into
      let HideButton = document.getElementById("HideButton");
      let HalfSizeButton = document.getElementById("HalfSizeButton");
      let ThreeQuarterSizeButton = document.getElementById("ThreeQuarterSizeButton");
      let ShowButton = document.getElementById("ShowButton");
      let FirstProjectImage = document.getElementById("FirstProjectImage");

      let ButtonArray = [HideButton, HalfSizeButton, ThreeQuarterSizeButton, ShowButton];

      // loop through the array of butttons
      ButtonArray.forEach(function(button) {
        // set an event listener for each button
        button.addEventListener("click", ButtonClick);
      }, this);

      // Use one named function, ButtonClick to respond to each of the buttons
      function ButtonClick(event){
          // store which button has been clicked in currentButton
          //let currentButton = event.currentTarget; <- one way of getting a ref to the button
          let currentButton = event.currentTarget;
          switch(currentButton.getAttribute("id")) {
            case "HideButton":
              FirstProjectImage.style.display = "none";
            break;
            case "HalfSizeButton":
              FirstProjectImage.style.maxWidth = "50%";
              FirstProjectImage.style.display = "block";
            break;
            case "ThreeQuarterSizeButton":
              FirstProjectImage.style.maxWidth = "75%";
              FirstProjectImage.style.display = "block";
            break;
            case "ShowButton":
              FirstProjectImage.style.display = "block";
              FirstProjectImage.style.maxWidth = "100%";
            break;
          }
        }

      break;

    case "Contact":
      let FullName = document.getElementById("FullName");
      let ContactNumber = document.getElementById("ContactNumber");
      let Email = document.getElementById("Email");
      let Message = document.getElementById("Message");
      let SendButton = document.getElementById("SendButton");

      SendButton.addEventListener("click", function(event){
        event.preventDefault();

        console.log(FullName);
        console.log(ContactNumber);
        console.log(Email);
        console.log(Message);

      });

      break;
  }

  let myVariable = 500;

})(); // end of the IIFE