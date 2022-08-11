//problem One
function radianToDegree(radian){

    if(typeof radian === "number")
    {
        
        let degree=radian*(180/Math.PI)
        degree=degree.toFixed(2);

        let degreeNumberType=parseFloat(degree);
    
        return degreeNumberType;
       
    }

    //Showing Error Message
    else{
        return "Please! Provide a valid input that will be a Number type.";
    }
   
}

let radians=radianToDegree(25);
console.log(radians);


