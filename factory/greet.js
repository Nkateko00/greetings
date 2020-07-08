function greetMeFactory(data){
    var userMap = data || {};


    function greetUser(name,languange){
        addUser(name);
        switch(languange){
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
    function greetCount(user){
       return Object.keys(userMap).length;
       //returns the key of the object instead of the value
    }
    function getAllUsers(){
        return userMap;
        //storing all the user names entered....for local storage
    }
    function resetData(){
       userMap = {};
    }
    function getAllTheNames(){

    }
    return{
        greetUser,
        greetCount,
        getAllUsers,
        resetData,
        getAllTheNames

    }

    

}