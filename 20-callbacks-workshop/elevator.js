// create emitter
var Emitter = require('events');

// create elevator class
class Elevator{
  constructor(peeps){
    this.passengers = peeps;
    // default is the first floor
    this.currentFlor = 1;
    this.emitter = new Emitter();
    this.emitter.on('up', function(firstPerson, self){
      setTimeout(function(){
        self.currentFlor++;
        console.log(`Gooing up --> Current floor: ${self.currentFlor}`);
        // 4. check if the current floor is the destination of the person
        if(firstPerson.destination === self.currentFlor){
          // 5a. if it is, release the person and start going down
          console.log(`${firstPerson.name}, you have arrived!`);
          self.down();
        }
        else{
          // 5b. if it isn't, keep moving up (go back to 3.)
          console.log('Moving up...');
          self.up(firstPerson);
        }
      }, 1000);
    });
    this.emitter.on('down', function(self){
      setTimeout(function(){
        self.currentFlor--;
        console.log(`Going down --> Current floor: ${self.currentFlor}`);
        // 6. check if current floor is 1
        if(self.currentFlor === 1){
          // 7a. if yes, go to 1
          console.log(`Ready to take someone up!`);
          // 8. get new person if there is one
          self.getPeople();
        }
        else{
          // 7b. if no, keep going down
          console.log('Moving down...');
          self.down();
        }
      }, 1000);
    })
  }

  up(firstPerson){
    this.emitter.emit('up', firstPerson, this);
  }
  down(){
    this.emitter.emit('down', this);
  }
  getPeople(){
    // 1. check if there are people who want to take elevator
    if(this.passengers.length > 0){
      // 2. take the first person out of the lobby
      var firstPerson = this.passengers.shift();
      console.log(`Welcome aboard, ${firstPerson.name}!`);
      // 3. start moving up: increment the current floor
      this.up(firstPerson);
    }
    else{
      console.log('No more people to take anywhere:)');
    }
  }
}


function init(){
  // peeps waiting to go up from the lobby
  var passengers = [
    { name: 'Jerry', destination: 4 },
    { name: 'Kramer', destination: 5 },
    { name: 'Newman', destination: 2 }
  ];
  var elevator = new Elevator(passengers);
  elevator.getPeople();
}
init();



// Random Note: ES6 syntax () => {} === function(){}
