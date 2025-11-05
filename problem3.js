import { inventory } from "./inventory.js";
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
//  Execute a function to Sort all the car model names into alphabetical order and 
// log the results in the console as it was returned.
export default function problem3(inventory){
       let carModels = [];
       for(let i=0; i < inventory.length; i++){
        carModels.push(inventory[i].car_model);
       }
    // bubble sort.

    for(let i=0; i<carModels.length; i++){

        for(let j=i+1; j<carModels.length; j++){

            if(carModels[i].toLowerCase() > carModels[j].toLowerCase()){

                let temp = carModels[i];
                carModels[i] = carModels[j];
                carModels[j] = temp;
            }
        }
    }
    return carModels;
}