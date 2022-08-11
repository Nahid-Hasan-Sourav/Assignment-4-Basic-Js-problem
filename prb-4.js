function publicBusFare(people){
    if(typeof people === "number"){
        let BusCaoability = 50;
        let MicrobusCapability = 11;
        let publicBusTicketFare = 250;

        let BusRemaining=people % BusCaoability;
        let MicrobusRemaining=BusRemaining % MicrobusCapability;
        let publicBusCoast=MicrobusRemaining * publicBusTicketFare;

        return publicBusCoast

    }
    else{
        return "Please! Provide a valid input that will be a NUmber type.";
    }
}

let outputFour=publicBusFare(365);
console.log(output)