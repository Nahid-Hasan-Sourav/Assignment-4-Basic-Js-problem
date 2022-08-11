//Problem Two
function  isJavaScriptFile(input){
    if(typeof input === "string"){

        const fileName=input.toLowerCase(); 

        if(fileName.endsWith(".js")){
            return true;
        }
        else{
            return false;
        }
    }

    //showing error message
    else{
        return "Please! Provide a valid input that will be a String type.";
    }
}

let outputTwo=isJavaScriptFile("app.png");
console.log(outputTwo)