class Bike {
    constructor(gears, startGear){
        this.gears = gears;
        this.currentGear = startGear;
    }
    changeGear(direction, changeBy) {
        if (direction === 'up') {
            this.currentGear += changeBy;
        } else {
            this.currentGear -= changeBy;
        }
    }
}
const bike = new Bike(10, 5);
console.log(bike.currentGear); // 5
bike.changeGear('up', 2);
console.log(bike.currentGear); // 7