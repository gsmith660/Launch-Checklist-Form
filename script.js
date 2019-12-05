// Write your JavaScript code here!
window.addEventListener('load', function() {
   let form = document.querySelector('form');
   form.addEventListener('submit', function(event) {
      event.preventDefault();
      let pilotName = document.querySelector('input[name=pilotName]').value;
      let copilotName = document.querySelector('input[name=copilotName]').value;
      let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
      let cargoMass = document.querySelector('input[name=cargoMass]').value;
      if (pilotName === '' || copilotName === '' || fuelLevel === '' || cargoMass === '') {
         alert('All fields are required.');
      } else {
         fuelLevel = Number(fuelLevel);
         cargoMass = Number(cargoMass);
         if (isNaN(fuelLevel) || isNaN(cargoMass)) {
            alert('Fuel Level and Cargo Mass should be numbers.');
         } else {
            let launchStatus = document.getElementById('launchStatus');
            let faultyItems = document.getElementById('faultyItems');
            let pilotStatus = document.getElementById('pilotStatus');
            let copilotStatus = document.getElementById('copilotStatus');
            let fuelStatus = document.getElementById('fuelStatus');
            let cargoStatus = document.getElementById('cargoStatus');

            pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            if (fuelLevel < 10000 || cargoMass > 10000) {
               faultyItems.style.visibility = 'visible';
               launchStatus.innerHTML = `Shuttle not ready for launch`;
               launchStatus.style.color = 'red';
               if (fuelLevel < 10000) {
                  fuelStatus.innerHTML = `Fuel level too low for launch`;
               }
               if (cargoMass > 10000) {
                  cargoStatus.innerHTML = `Cargo mass too high for launch`;
               }
            } else {
               launchStatus.innerHTML = `Shuttle is ready for launch`;
               launchStatus.style.color = 'green';
            }
         }
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
