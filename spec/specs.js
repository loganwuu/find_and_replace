describe('wordOrder', function() {
    it("counts a string with one word", function(){
        expect(wordOrder("hello")).to.eql({"hello": 1});
    });

    it("counts a string with same word which appears two times", function(){
        expect(wordOrder("hello hello")).to.eql({"hello": 2});
    });

    it("counts a string with two different words each appears one time", function(){
        expect(wordOrder("hello world")).to.eql({"hello": 1, "world": 1});
    });

    it("counts a string with two different words each appears different times", function(){
        expect(wordOrder("hello world world")).to.eql({"world": 2, "hello": 1});
    });
});
