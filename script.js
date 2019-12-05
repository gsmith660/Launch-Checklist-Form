// Write your JavaScript code here!
window.addEventListener('load', function() {
   let form = document.querySelector('form');
   form.addEventListener('submit', function(event) {
      let pilotName = document.querySelector('input[name=pilotName]').value;
      let copilotName = document.querySelector('input[name=copilotName]').value;
      let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
      let cargoMass = document.querySelector('input[name=cargoMass]').value;
      if (pilotName === '' || copilotName === '' || fuelLevel === '' || cargoMass === '') {
         alert('All fields are required.');
         event.preventDefault();
      }
      fuelLevel = Number(fuelLevel);
      cargoMass = Number(cargoMass);
      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         alert('Fuel Level and Cargo Mass should be numbers.');
         event.preventDefault();
      }
      event.preventDefault();
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
