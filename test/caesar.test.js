const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift is below -25", () => {
        const expected = false;
        const actual = caesarModule.caesar("Hello World", -26);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift is 0", () => {
        const expected = false;
        const actual = caesarModule.caesar("Hello World", 0);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift is not present", () => {
        const expected = false;
        const actual = caesarModule.caesar("Hello World");
        expect(actual).to.equal(expected);
    })

    it("should return fasle if shift is above 25", () => {
        const expected = false;
        const actual = caesarModule.caesar("Hello World", 26);
        expect(actual).to.equal(expected);
    });

    it("should return an encrypted message when encoded is true", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesarModule.caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should be able to shift backward using a negative number", () => {
        const expected = "qefkhcri";
        const actual = caesarModule.caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    });

    it("should wrap around the alphabet if a letter such as z is being encrypted", () => {
        const expected = "c";
        const actual = caesarModule.caesar("z", 3);
        expect(actual).to.equal(expected);
    });

    it("should be able to wrap the alphabet if a letter such as a is being encrypted backward", () => {
        const expected = "z";
        const actual = caesarModule.caesar("a", -1);
        expect(actual).to.equal(expected);
    });

    it("should decode a message when encode is false", () => {
        const expected = "this is a secret message!";
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });
})


