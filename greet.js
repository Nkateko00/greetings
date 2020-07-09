const greetButton = document.getElementById("greetButton");
const input = document.getElementById("inputElement");
const message = document.getElementById("alert");
const myCounter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
    
var data = localStorage['greetedUsers'] ?JSON.parse(localStorage[greetedUsers]) : {};
    
var greetings = greetMeFactory(data);

function greetRequest(){



}
greetButton.addEventListener("click",greetRequest())