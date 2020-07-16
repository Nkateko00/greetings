function greetMeFactory(data){
    var userMap = data || {};


    function greetUser(name,language){
        addUser(name);
        switch(language){
            case "English":
            return `Hello, ${name}`;
            case "French":
            return `Bonjour, ${name}`;
            case "Xitsonga":
            return `Ahe, ${name}`;
            default :
            return `Hi, ${name}`;
            //Remove JQuery
        }
    }
    function addUser (userName){
        if(userMap[userName]===undefined){
            userMap[userName] = 0;
        }
    }
    function greetCount(){
       return Object.keys(userMap).length;
       //returns the key of the object instead of the value
    }
    function getAllUsers(){
        return userMap;
        //storing all the user names entered....for local storage
    }
    function resetData(){
       userMap = {};
       //when the reset button is pressed map must be empty
    }
    function getAllTheNames(nameReceieved){
        var specialCase = /[^A-Za-z]/g;
        if(nameReceieved !== ""){
            var noNumber = nameReceieved.replace(specialCase,"");
            var lowerCase = noNumber[0].toUpperCase() + noNumber.slice(1).toLowerCase();
            //makes the first letter upper case and everything else lower case
            return lowerCase;
        }
          return "";
        }
    function errorMessage(name,lang){
        if(name === "" && !lang){
            return "Please enter name and select a langauge"
        }
        else if(!lang){
            return "No language selected"
        }
         else if(name === ""){
            return "Please enter your name"
        }

    }
    
    return{
        greetUser,
        greetCount,
        getAllUsers,
        resetData,
        addUser,
        errorMessage,
        getAllTheNames

    }

    

}