describe('findAndReplace', function() {
    it("finds the word that is to be replaced by another word and reconstructs the array with the new word and outputs as a string", function(){
        expect(findAndReplace("hello world", "world", "universe")).to.eql("hello universe");
    });

    it("punctuations are removed", function(){
        expect(findAndReplace("hello world!", "world", "universe")).to.eql("hello universe");
    });

    it("returns 'Sorry, no match found between the words in your sentence and the replacing word.'", function(){
        expect(findAndReplace("hello world!", "universe", "universe")).to.eql("Sorry, no match found between the words in your sentence and the replacing word.");
    });

});
