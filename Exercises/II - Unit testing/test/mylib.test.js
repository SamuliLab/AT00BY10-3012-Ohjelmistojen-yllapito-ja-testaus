// test/mylib.test.js

const { expect } = require("chai");
const mylib = require("../mylib");

describe("mylib: aritmetiikkatestit", function () {

    before(function () {
        console.log("Aloitetaan testaus...");
    });

    after(function () {
        console.log("Testaus suoritettu.");
    });

    it("laskee summan oikein", function () {
        expect(mylib.add(2, 3)).to.equal(5);
    });

    it("laskee erotuksen oikein", function () {
        expect(mylib.subtract(10, 4)).to.equal(6);
    });

    it("laskee tulon oikein", function () {
        expect(mylib.multiply(6, 7)).to.equal(42);
    });

    it("laskee osamäärän oikein", function () {
        expect(mylib.divide(20, 5)).to.equal(4);
    });

    it("heittää ZeroDivision‑virheen kun jakaja on 0", function () {
        expect(() => mylib.divide(10, 0)).to.throw("ZeroDivision");
    });

});
