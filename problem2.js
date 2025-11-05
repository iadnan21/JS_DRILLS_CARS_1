import { inventory } from "./inventory.js";    
// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. 
// Execute a function to find what the make and model of the last car in the inventory is?  
// Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"
export default function problem2(inventory){
    let car = inventory[inventory.length-1];
    return `Last car is a ${car.car_make} ${car.car_model}`;
}
