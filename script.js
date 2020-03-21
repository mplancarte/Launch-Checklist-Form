// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert ("All fields are required!");
         event.preventDefault();
      }
      if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false) {
         alert ("Enter a valid name using letters A-Z, a-z");
         event.preventDefault();
      }
      if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert ("Enter a valid number");
         event.preventDefault();
      }

      document.getElementById("pilotStatus").innerHTML = `
      Pilot ${pilotNameInput.value} is ready for launch
      `;
      document.getElementById("copilotStatus").innerHTML = `
      Co-pilot ${copilotNameInput.value} is ready for launch
      `;

      if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("fuelStatus").innerHTML = `
         Fuel level is too low for launch
         `;
      }
      
      if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("cargoStatus").innerHTML = `
         Cargo mass too heavy for launch
         `;
      }
   });

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
