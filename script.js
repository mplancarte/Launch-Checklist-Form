// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function (json) {
         let index = Math.floor((Math.random()*6))
         const planet = document.getElementById("missionTarget");
         planet.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
      });
   });

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

      if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert ("Make sure to enter valid information for each field!");
         event.preventDefault();
      }

      if (isNaN(pilotNameInput.value) === true && isNaN(copilotNameInput.value) === true && isNaN(fuelLevelInput.value) === false && isNaN(cargoMassInput.value) === false){
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
         event.preventDefault();
      } else {
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
         event.preventDefault();
      }

      if (cargoMassInput.value >= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("cargoStatus").innerHTML = `
         Cargo mass too heavy for launch
         `;
      } else {
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         event.preventDefault();
      }

      if (isNaN(pilotNameInput.value) === true && isNaN(copilotNameInput.value) === true && fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready For Launch";
         document.getElementById("faultyItems").style.visibility = "hidden";
      }
   }
   });
});