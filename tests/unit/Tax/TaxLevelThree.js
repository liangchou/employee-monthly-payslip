/* global describe, it */

import { expect } from 'chai';
import TaxLevelThree from "../../../src/Tax/TaxLevelThree";

describe('TaxLevelThree', () => {
    it ('should get income tax 1462 with annual salary 80,001', () => {
        const tax = new TaxLevelThree(80001);
        expect(tax.getIncomeTax()).to.be.equal(1462);
    });

    it ('should get income tax 4546 with annual salary 180,000', () => {
        const tax = new TaxLevelThree(180000);
        expect(tax.getIncomeTax()).to.be.equal(4546);
    });    
});
