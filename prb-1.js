function radianToDegree(radian){

    if(typeof radian === "number")
    {

        let degree=radian*(180/Math.PI)
        degree=degree.toFixed(2);

        let degreeNumberType=parseFloat(degree);
    
        return degreeNumberType;
       
    }
    else{
        return "Please! Provide a valid input that will be a NUmber type.";
    }
   
}

let radians=radianToDegree(199);
// console.log(radians);


