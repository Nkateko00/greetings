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
            var lowerCase = noNumber.toLowerCase();
            return lowerCase;
        }
          return "";
        }
    
    return{
        greetUser,
        greetCount,
        getAllUsers,
        resetData,
        getAllTheNames

    }

    

}