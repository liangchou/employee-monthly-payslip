import TaxFactory from "./Tax/TaxFactory";

class Record {
    constructor (data) {
        // [ 'David', 'Rudd', '60050', '9%', '01 March – 31 March' ]
        const [firstName, lastName, annualSalary, superRate, payPeriod] = data;

        this.firstName = firstName || "";
        this.lastName = lastName || "";
        this.annualSalary = parseInt(annualSalary, 10) || 0;
        this.superRate = superRate ? (parseInt(superRate.replace("%", ""), 10) || 0) : 0;
        this.payPeriod = payPeriod || "";

        this.compute();
    }

    compute () {
        const tax = new TaxFactory(this.annualSalary);

        this.grossIncome = Math.round(this.annualSalary/12);
        this.incomeTax = tax.getIncomeTax();
        this.netIncome = this.grossIncome - this.incomeTax;
        this.super = Math.round(this.grossIncome * this.superRate / 100);
    }

    getResult () {
        return [
            this.lastName + " " + this.firstName,
            this.payPeriod,
            this.grossIncome,
            this.incomeTax,
            this.netIncome,
            this.super
        ];
    }
}

export default Record;
