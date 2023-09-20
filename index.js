// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    let scubaLocation = 42;
    if (location<scubaLocation){
        return (location-scubaLocation)*-1;
    }else {
        return location-scubaLocation;
    }
}

function distanceFromHqInFeet(block){
    return (distanceFromHqInBlocks(block)) * 264
}

function distanceTravelledInFeet(startBlock,destinationBlock){
    if (destinationBlock < startBlock) {
        return ((destinationBlock-startBlock) * 264)*-1;
    }
    else{
        return (destinationBlock-startBlock) * 264;
    }
}

function calculatesFarePrice(startBlock,destinationBlock){
    let feet = distanceTravelledInFeet(startBlock,destinationBlock);
    let newFeet = feet -400;
    console.log(feet);
    /* switch(feet){
        case (264 <= 400):
            console.log(true)
            break;
        default:
            console.log(false)
    } */

    if (feet <= 400){
        return 0;
    }
    else if (feet >=400 && feet <=2000){
        return newFeet * 0.02;
    }
    else if (feet > 2000 && feet <2500){
        return 25; 
    }
    else {
        return `cannot travel that far`
    }
}

