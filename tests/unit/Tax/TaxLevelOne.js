/* global describe, it */

import { expect } from 'chai';
import TaxLevelOne from "../../../src/Tax/TaxLevelOne";

describe('TaxLevelOne', () => {
    it ('should get income tax 0 with annual salary 18,201', () => {
        const tax = new TaxLevelOne(18201);
        expect(tax.getIncomeTax()).to.be.equal(0);
    });

    it ('should get income tax 298 with annual salary 37,000', () => {
        const tax = new TaxLevelOne(37000);
        expect(tax.getIncomeTax()).to.be.equal(298);
    });    
});
