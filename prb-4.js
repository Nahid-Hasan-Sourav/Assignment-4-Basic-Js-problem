//Problem Four
function publicBusFare(people){
    let BusCapability = 50;
    let MicrobusCapability = 11;
    let publicBusTicketFare = 250;

    if(typeof people === "number"){
        
        let BusRemaining=people % BusCapability;
        let MicrobusRemaining=BusRemaining % MicrobusCapability;
        let publicBusCoast=MicrobusRemaining * publicBusTicketFare;

        return publicBusCoast

    }
    //Showing Error Message
    else{
        return "Please! Provide a valid input that will be a Number type.";
    }
}

let outputFour=publicBusFare(365);
console.log(outputFour);