const base = 0;
const lowBound = 18200;
const rate = 0.19;
const months = 12;

class TaxLevelOne {
    constructor (annualSalary) {
        this.annualSalary = annualSalary;
        this.incomeTax = Math.round((base + (annualSalary - lowBound) * rate) / months);
    }

    getIncomeTax () {
        return this.incomeTax;
    }
}

export default TaxLevelOne;
