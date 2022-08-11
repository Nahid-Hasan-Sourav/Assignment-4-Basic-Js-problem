function  isJavaScriptFile(input){
    if(typeof(input)==="string"){
        const fileName=input.toLocaleLowerCase();       
        if(fileName.endsWith(".js")){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "Please! Provide a valid input that will be a String type.";
    }
}

let output=isJavaScriptFile("image.jpg.js");
console.log(output)