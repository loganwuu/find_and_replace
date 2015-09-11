describe('findAndReplace', function() {
    it("removes punctuations", function(){
        expect(findAndReplace("hello world!", "world", "universe")).to.eql("hello universe");
    });

    it("downcase the input string", function(){
        expect(findAndReplace("Hello World!", "world", "universe")).to.eql("hello universe");
    });

    it("finds the word that is to be replaced by another word and reconstructs the array with the new word and outputs as a string", function(){
        expect(findAndReplace("hello world", "world", "universe")).to.eql("hello universe");
    });

    it("returns 'Sorry, no match found between the words in your sentence and the replacing word.' for no match", function(){
        expect(findAndReplace("hello world!", "universe", "universe")).to.eql("Sorry, no match found between the words in your sentence and the replacing word.");
    });

});
