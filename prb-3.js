function oilPrice(disel,petrol,octane){

    // console.log(typeof(disel));

    if(typeof disel ==="number" && typeof petrol ==="number" && typeof octane ==="number" ){
       let diselPrice  = 114;
       let petrolPrice = 130;
       let octanePrice = 135;

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

let outputThree=oilPrice(0,2,3);
// console.log(output);