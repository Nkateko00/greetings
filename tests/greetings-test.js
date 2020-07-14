describe("The greetUser Function",function(){
it("It should greet Cameron correctly",function(){
    var greetPerson = greetMeFactory()
    assert.equal("Hello, Cameron",greetMeFactory().greetUser("Cameron","English"));

});
it("It should greet Aubrey in Xitsonga correctly",function(){
    var greetPerson = greetMeFactory()
    assert.equal("Ahe, Aubrey",greetMeFactory().greetUser("Aubrey","Xitsonga"));

});
it("It should greet Valerie in French correctly",function(){
    var greetPerson = greetMeFactory()
    assert.equal("Bonjour, Valerie",greetMeFactory().greetUser("Valerie","French"));

});
it("It should greet in default correctly",function(){
    var greetPerson = greetMeFactory()
    assert.equal("Hi, Valerie",greetMeFactory().greetUser("Valerie","default"));

});
});
describe("The greetCount Function",function(){
it("It should be able to return total number of users from zero",function(){
    var greet = greetMeFactory();
    assert.equal(0,greet.greetCount(""));
});
it("It should return number of users (two) greeted in Xitsonga",function(){
    var greet = greetMeFactory();
    greet.greetUser("Teko","Xitsonga");
    greet.greetUser("Zizou","Xitsonga");
    assert.equal(2,greet.greetCount());
});
it("It should return number of users (four) greeted in French",function(){
    var greet = greetMeFactory();
    greet.greetUser("Sasuke","French");
    greet.greetUser("Naruto","French");
    greet.greetUser("Sakura","French");
    greet.greetUser("Gaara","French");
    assert.equal(4,greet.greetCount());
});
it("It should return number of users (two) greeted in English",function(){
    var greet = greetMeFactory();
    greet.greetUser("Goku","English");
    greet.greetUser("Gohan","English");
    assert.equal(2,greet.greetCount());
    
});
});
describe("The getAllUsers Function",function(){
it("It should return the object of all the users greeted",function(){
    var greet = greetMeFactory();
    greet.greetUser("Shiluva","Enlgish");
    greet.greetUser("Thembi","French");

    assert.deepEqual({"Shiluva":0,"Thembi":0 },greet.getAllUsers());
    //RETUNS THE OBJECT
});
it("It should return 1 if selected on a Xitsonga for Shiluva",function(){
    var greet = greetMeFactory();
    greet.greetUser("Shiluva","Xitsonga");
    assert.equal(1,greet.greetCount());

});
it("It should return 1 if selected on French for Mandisa",function(){
    var greet = greetMeFactory();
    greet.greetUser("Mandisa","French")
    assert.equal(1,greet.greetCount());
});
});
describe("the getAllTheNames Function",function(){
it("It should be able to return name without special characters",function(){
    var greet = greetMeFactory();
    assert.equal("Shiluva",greet.getAllTheNames("Sh&***%$#@*i^*^%%$$%^lu^%$#@@@va"));
});
it("It should be able to return name without numbers",function(){
    var greet = greetMeFactory();
    assert.equal("Themba",greet.getAllTheNames("T3187730096h76671627e8812m121215554b2121a"));
});
it("It should be able to return caps in lowercase is enetered",function(){
    var greet = greetMeFactory();
    assert.equal("Nicole",greet.getAllTheNames("nIcole"));
});


});