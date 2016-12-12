import TaxLevelZero from "./TaxLevelZero";
import TaxLevelOne from "./TaxLevelOne";
import TaxLevelTwo from "./TaxLevelTwo";
import TaxLevelThree from "./TaxLevelThree";
import TaxLevelFour from "./TaxLevelFour";

class TaxFactory {
    constructor (annualSalary) {
        if (annualSalary > 180000) {
            return new TaxLevelFour(annualSalary);
        } else if (annualSalary > 80000) {
            return new TaxLevelThree(annualSalary);
        } else if (annualSalary > 37000) {
            return new TaxLevelTwo(annualSalary);
        } else if (annualSalary > 18200) {
            return new TaxLevelOne(annualSalary);
        }else {
            return new TaxLevelZero(annualSalary);
        }
    }
}

export default TaxFactory;
