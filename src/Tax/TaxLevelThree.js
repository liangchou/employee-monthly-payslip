const base = 17547;
const lowBound = 80000;
const rate = 0.37;
const months = 12;

class TaxLevelThree {
    constructor (annualSalary) {
        this.annualSalary = annualSalary;
        this.incomeTax = Math.round((base + (annualSalary - lowBound) * rate) / months);
    }

    getIncomeTax () {
        return this.incomeTax;
    }
}

export default TaxLevelThree;
