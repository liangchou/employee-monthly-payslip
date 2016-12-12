const base = 54547;
const lowBound = 180000;
const rate = 0.45;
const months = 12;

class TaxLevelFour {
    constructor (annualSalary) {
        this.annualSalary = annualSalary;
        this.incomeTax = Math.round((base + (annualSalary - lowBound) * rate) / months);
    }

    getIncomeTax () {
        return this.incomeTax;
    }
}

export default TaxLevelFour;
