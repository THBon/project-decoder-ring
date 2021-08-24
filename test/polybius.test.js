const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
    it("should return a string of number when encoding a message", () => {
        const expected = '3251131343 2543241341';
        const actual = polybiusModule.polybius("Hello world");
        expect(actual).to.equal(expected);
    });

    it("should properly encode a message that includes i or j", () => {
        const expected = '4432423352125413';
        const actual = polybiusModule.polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should return a message when encode is set to false", () => {
        const expected = "hello world";
        const actual = polybiusModule.polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });

    it("should properly decode numbers that represent i or j", () => {
        const expected = "thi/jnkful";
        const actual = polybiusModule.polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it("should return false if the input is odd during decode", () => {
        const expected = false;
        const actual = polybiusModule.polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
    })
});