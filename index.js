const { start } = require("repl");

// Code your solution in this file
function distanceFromHqInBlocks(pickUpLocation){
    let scuberHq = 42;
    if (pickUpLocation > scuberHq){
        return pickUpLocation - scuberHq;
     }
    else if(pickUpLocation < scuberHq){
        return scuberHq - pickUpLocation;
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(pickUpLocation){
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    return blocks * 264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination){
 return Math.abs(destination - start)*264;
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0;
    }
    else if(distance <= 2000){
        return (distance-400) *0.02;
    }
    else if(distance <= 2500){
        return 25;
    }
    else (distance> 2500);
        return `cannot travel that far`;
    
        
}

calculatesFarePrice(43, 44);
calculatesFarePrice(32, 34);
calculatesFarePrice(50, 58);
calculatesFarePrice(24, 34);