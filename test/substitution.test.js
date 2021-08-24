const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the alphabet string is too long or too short", () => {
        const expected = false;
        const actual = substitutionModule.substitution("thinkful", "short");
        expect(actual).to.equal(expected);
    });

    it("should return false if the alphabet string is empty", () => {
        const expected = false;
        const actual = substitutionModule.substitution("thinkful");
        expect(actual).to.equal(expected);
    });
    
    it("should return false if a letter in the alphabet is repeated", () => {
        const expected = false;
        const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });

    it("should properly encode based on the given alphabet string", () => {
        const expected = "jrufscpw";
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    }); 

    it("should properly encode a more complicated message", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should properly encode with custom symbol as an alphabet", () => {
        const expected = "y&ii$r&";
        const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });

    it("should properly decode a message using the given custom alphabet", () => {
        const expected = "thinkful";
        const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    it("should properly decode a message with custom symbol in them", () => {
        const expected = "message";
        const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });
});