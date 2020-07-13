const greetButton = document.getElementById("greetButton");
const inputArea = document.getElementById("inputElement");
const message = document.getElementById("alert");
const myCounter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

var data = localStorage['getUsers'] ?JSON.parse(localStorage[getUsers]) : {};

var greetingFactory = greetMeFactory(data);

window.addEventListener('loading',function(){
    myCounter.innerHTML = greetingFactory.greetCount();

});
greetButton.addEventListener('click',function(){
    var inputOverall = inputArea.value;
    var radioButton = document.querySelector("input[name ='radio']:checked");

    if(radioButton){
        var chosenLanguage = radioButton.value
        var getNames = greetingFactory.getAllTheNames(inputOverall);
        if(getNames !== ""){
            message.innerHTML = greetingFactory.greetUser(getNames, chosenLanguage);
            myCounter.innerHTML = greetingFactory.greetCount();
            localStorage["getUsers"] = JSON.stringify(greetingFactory.getAllUsers());
        }else{
            message.innerHTML = "Please enter your name";
        }
    }
    else{
            message.innerHTML = "Please choose your language";
        }
});
resetButton.addEventListener("click",function(){
  greetingFactory.resetData();

});