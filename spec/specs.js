describe('findAndReplace', function() {
    it("breaks the string into an array of elements", function(){
        expect(findAndReplace("hello world")).to.eql(["hello", "world"]);
    });

    it("finds the word that is to be replaced by another word and reconstructs the array with the new word", function(){
        expect(findAndReplace("hello world", "world", "universe")).to.eql(["hello", "universe"]);
    });

    it("outputs the array as a string", function(){
        expect(findAndReplace("hello world", "world", "universe")).to.eql("hello universe");
    });

});
