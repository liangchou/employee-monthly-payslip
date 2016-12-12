class TaxLevelZero {
    constructor (annualSalary) {
        this.annualSalary = annualSalary;
    }

    getIncomeTax () {
        return 0;
    }
}

export default TaxLevelZero;
