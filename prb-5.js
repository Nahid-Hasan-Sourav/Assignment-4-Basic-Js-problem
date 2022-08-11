function isBestFriend(personOne,personTwo){

    if(typeof personOne === "object" && !Array.isArray(personOne) && typeof personTwo === "object" && !Array.isArray(personTwo))

    {
        const personOneNames=personOne.name.toLowerCase();
        const personOneFriend=personOne.friend.toLowerCase();
        const personTwoNames=personTwo.name.toLowerCase();
        const personTwoFriend=personTwo.friend.toLowerCase();
        

      if(personOneNames===personTwoFriend && personOneFriend===personTwoNames)
      {
        return  true;
      }

      else{
        return  false;
      }
    }
    //Showing Error Message
    else{
        return "Please! Provide a valid input that will be a object type.";
    }
}




const personOne={
    name:"abul",friend:"babul"
}
const personTwo={
    name:"babul",friend:"abul"
}


let result=isBestFriend(personOne,personTwo);
console.log(typeof result)