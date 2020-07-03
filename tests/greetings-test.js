describe("The greetUser Function",function(){
it("It should greet Cameron correctly",function(){
    var greetPerson = greetMeFactory()
    assert.equal("Hello,Cameron",greetMeFactory.greetUser("Cameron","English"));

});
}); 