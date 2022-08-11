
function isBestFriend(personOne,personTwo){

        if(typeof personOne === "object" && !Array.isArray(personOne) && typeof personTwo === "object" && !Array.isArray(personTwo))

        {
            const personOneNames=personOne.name.toLowerCase();
            const personOneFriend=personOne.name.toLowerCase();
            const personTwoNames=personTwo.friend.toLowerCase();
            const personTwoFriend=personTwo.friend.toLowerCase();

          if(personOneNames===personTwoFriend && personOneFriend===personTwoNames)
          {
            return "true"
          }
          else{
            return "false"
          }
        }
        else{
            return "Please! Provide a valid input that will be a object type.";
        }
}

const personOne={
    name:"aBul",friend:"Babul"
}
const personTwo={
    name:"babul",friend:"abul"
}


let result=isBestFriend(personOne,personTwo);
console.log(result)