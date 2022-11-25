// Code your solution in this file!
//const distance = 43;
function distanceFromHqInBlocks(coveredDistance) {
        if(coveredDistance > 42) {
                return coveredDistance - 42;
        } else {
                return 42 - coveredDistance
        }

        
    
}

function distanceFromHqInFeet(coveredDistance){
        let d = distanceFromHqInBlocks(coveredDistance)

        let feet = 0;
        feet = d * 264;

        return feet;

}

function distanceTravelledInFeet(beginDeliveryInFeet, stopDeliveryInFeet){
        if(beginDeliveryInFeet > stopDeliveryInFeet){
                return (beginDeliveryInFeet - stopDeliveryInFeet) * 264
        } else {
                return (stopDeliveryInFeet - beginDeliveryInFeet) * 264;
        }
}

function calculatesFarePrice(beginDeliveryInFeet, stopDeliveryInFeet) {
        let distanceCovered = Math.abs (beginDeliveryInFeet - stopDeliveryInFeet) * 264
        let f = 0;
        if(distanceCovered <= 400) {
                return f;
        } else if(distanceCovered > 400 && distanceCovered <= 2000) {
                return f = (distanceCovered - 400) * 0.02; 
                
        } else if(distanceCovered > 2000 && distanceCovered <= 2500){
                return f = 25;
        } else {
                return f = `cannot travel that far`;
        }
}
