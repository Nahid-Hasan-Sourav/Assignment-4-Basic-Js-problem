function oilPrice(disel,petrol,octane){

    if(typeof(disel)==="number" && typeof(disel)==="number" && typeof(octane)==="number" ){
       let diselPrice=114;
       let petrolPrice=130;
       let octanePrice=135;

       let totallDiselPrice=diselPrice*disel;
       let totallPetrolPrice= petrolPrice*petrol;
       let totallOctanePrice=octanePrice*octane;

       let OveallTotalPrice =totallDiselPrice+totallPetrolPrice+totallOctanePrice;

       return OveallTotalPrice;


    }
    else{
        return "Please! Provide a valid input that will be a NUmber type.";
    }
}

let output=oilPrice(0,2,3);
console.log(output);