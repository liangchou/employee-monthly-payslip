/* global describe, it */

import { expect } from "chai";
import TaxFactory from "../../../src/Tax/TaxFactory";
import TaxLevelZero from "../../../src/Tax/TaxLevelZero";
import TaxLevelOne from "../../../src/Tax/TaxLevelOne";
import TaxLevelTwo from "../../../src/Tax/TaxLevelTwo";
import TaxLevelThree from "../../../src/Tax/TaxLevelThree";
import TaxLevelFour from "../../../src/Tax/TaxLevelFour";

describe("TaxFactory", () => {
    let tax;

    it ('should fit in tax level zero (0 ~ 18,200) with annual salary 0', () => {
        tax = new TaxFactory(0);
        expect(tax instanceof TaxLevelZero).to.be.true;
    });

    it ('should fit in tax level zero (0 ~ 18,200) with annual salary 18,200', () => {
        tax = new TaxFactory(18200);
        expect(tax instanceof TaxLevelZero).to.be.true;
    });

    it ('should fit in tax level one (18,201 ~ 37,000) with annual salary 18,201', () => {
        tax = new TaxFactory(18201);
        expect(tax instanceof TaxLevelOne).to.be.true;
    });

    it ('should fit in tax level one (18,201 ~ 37,000) with annual salary 37,000', () => {
        tax = new TaxFactory(37000);
        expect(tax instanceof TaxLevelOne).to.be.true;
    });

    it ('should fit in tax level two (37,001 ~ 80,000) with annual salary 37,001', () => {
        tax = new TaxFactory(37001);
        expect(tax instanceof TaxLevelTwo).to.be.true;
    });

    it ('should fit in tax level two (37,001 ~ 80,000) with annual salary 80,000', () => {
        tax = new TaxFactory(80000);
        expect(tax instanceof TaxLevelTwo).to.be.true;
    });

    it ('should fit in tax level three (80,001 ~ 180,000) with annual salary 80,001', () => {
        tax = new TaxFactory(80001);
        expect(tax instanceof TaxLevelThree).to.be.true;
    });

    it ('should fit in tax level three (80,001 ~ 180,000) with annual salary 180,000', () => {
        tax = new TaxFactory(180000);
        expect(tax instanceof TaxLevelThree).to.be.true;
    });

    it ('should fit in tax level four (>180,000) with annual salary 180,001', () => {
        tax = new TaxFactory(180001);
        expect(tax instanceof TaxLevelFour).to.be.true;
    });
});
