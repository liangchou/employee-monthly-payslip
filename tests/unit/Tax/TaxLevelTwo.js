/* global describe, it */

import { expect } from 'chai';
import TaxLevelTwo from "../../../src/Tax/TaxLevelTwo";

describe('TaxLevelTwo', () => {
    it ('should get income tax 298 with annual salary 37,001', () => {
        const tax = new TaxLevelTwo(37001);
        expect(tax.getIncomeTax()).to.be.equal(298);
    });

    it ('should get income tax 1462 with annual salary 80,000', () => {
        const tax = new TaxLevelTwo(80000);
        expect(tax.getIncomeTax()).to.be.equal(1462);
    });    
});
