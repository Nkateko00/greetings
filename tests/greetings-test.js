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