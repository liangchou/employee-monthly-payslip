/* global describe, it */

import TaxLevelFour from "../../../src/Tax/TaxLevelFour";
import { expect } from "chai";

describe("TaxLevelFour", () => {
    it ("should get income tax 4546 with annual salary 180,001", () => {
        const tax = new TaxLevelFour(180001);
        expect(tax.getIncomeTax()).to.be.equal(4546);
    });    
});
