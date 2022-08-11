function oilPrice(disel,petrol,octane){

    if(disel==="number" && petrol==="number" && octane==="number"){
        return "execute"
    }
    else{
        return "Please! Provide a valid input that will be a NUmber type.";
    }
}

let output=oilPrice(1,1,1);
console.log(output);