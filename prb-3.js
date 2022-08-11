//Problem Three
function oilPrice(disel,petrol,octane){

    
    let  PerLiterDiselPrice  = 114;
    let  PerLiterPetrolPrice = 130;
    let  PerLiterOctanePrice = 135;

    if(typeof disel ==="number" && typeof petrol ==="number" && typeof octane ==="number" ){
      
       let totallDiselPrice  =  PerLiterDiselPrice * disel;
       let totallPetrolPrice =  PerLiterPetrolPrice * petrol;
       let totallOctanePrice =  PerLiterOctanePrice * octane;

       let OveallTotalPrice = totallDiselPrice+totallPetrolPrice+totallOctanePrice;

       return OveallTotalPrice;


    }
    //Showing Error message
    else{
        return "Please! Provide a valid input that will be a Number type.";
    }
}

let outputThree=oilPrice(0,2,3);
console.log(outputThree);