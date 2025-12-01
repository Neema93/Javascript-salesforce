function Bike(gears, startGear) {
  this.gears = gears;
  this.currentGear = startGear;
}
Bike.prototype.changeGear = function(direction,changeBy){
  if(direction === 'up') {
    this.currentGear += changeBy;
  } else {
    this.currentGear -= changeBy;
  }
}
const bike = new Bike(10, 4);
console.log(bike.gears); 
console.log(bike.currentGear); 
bike.changeGear('up', 1);
console.log(bike.currentGear); 
