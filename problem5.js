import { inventory } from "./inventory.js";    
import problem4 from "./problem4.js";
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000
// and return the array of older cars and log its length.
function problem5(inventory){
    const Caryear = problem4(inventory);
    const oldcar = [];
    for(let i=0; i < Caryear.length; i++){
        if(Caryear[i] < 2000){
            oldcar.push(Caryear[i]);
        }
        else{
            continue;
        }
    }
    return oldcar;
}

export default problem5;