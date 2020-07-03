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

    
    return{
        greetUser
    }

    

}