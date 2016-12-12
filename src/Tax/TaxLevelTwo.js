const base = 3572;
const lowBound = 37000;
const rate = 0.325;
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
