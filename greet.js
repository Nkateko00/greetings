const greetButton = document.getElementById("greetButton");
const inputArea = document.getElementById("inputElement");
const message = document.getElementById("alert");
const myCounter = document.querySelector(".counter");
const resetButton = document.getElementById("resetButton");

var data = localStorage['getUsers'] ? JSON.parse(localStorage['getUsers']) : {};

var greetingFactory = greetMeFactory(data);

window.addEventListener('load', function () {
    myCounter.innerHTML = greetingFactory.greetCount();
    //keeps the counter on the window even after reload

});
greetButton.addEventListener('click', function () {
    var inputOverall = inputArea.value;
    var radioButton = document.querySelector("input[name ='radio']:checked");

    if (radioButton) {
        // Making my radio buttons work
        // *set message
        // *set count
        // *greet the user
        var chosenLanguage = radioButton.value
        var getNames = greetingFactory.getAllTheNames(inputOverall);
        if (getNames !== "") {
            message.innerHTML = greetingFactory.greetUser(getNames, chosenLanguage);
            greetingFactory.addUser(inputOverall);
            myCounter.innerHTML = greetingFactory.greetCount();
            localStorage["getUsers"] = JSON.stringify(greetingFactory.getAllUsers());
        } else {
            message.innerHTML = "Please enter your name";
        }
    }
    message.innerHTML = greetingFactory.errorMessage(getNames, chosenLanguage);
});

setTimeout(function(){
    message.innerHTML("");
},6000);

resetButton.addEventListener("click", function () {
    greetingFactory.resetData();
    localStorage.clear();
    location.reload();

});