describe('findAndReplace', function() {
    it("receives inputs of three arguments", function(){
        expect(findAndReplace("hello hello hello")).to.eql("hello hello hello");
    });

    it("finds the word that is to be replaced by another word and reconstructs the array with the new word and outputs as a string", function(){
        expect(findAndReplace("hello world", "world", "universe")).to.eql("hello universe");
    });

    it("punctuations are removed", function(){
        expect(findAndReplace("hello world!", "world", "universe")).to.eql("hello universe");
    });

});
