/* global describe, it */

import { expect } from 'chai';
import TaxLevelZero from "../../../src/Tax/TaxLevelZero";

describe('TaxLevelZero', () => {
    it ('should get income tax 0 with annual salary 0', () => {
        const tax = new TaxLevelZero(0);
        expect(tax.getIncomeTax()).to.be.equal(0);
    });

    it ('should get income tax 0 with annual salary 18,200', () => {
        const tax = new TaxLevelZero(18200);
        expect(tax.getIncomeTax()).to.be.equal(0);
    });    
});
