import LoanApplication from "./LoanApplication";

export default class MortgageLender {
    availableFunds: number;
    addFunds(amount:number): void {};
    approve(loanApp:LoanApplication): void {};

    constructor () {
        this.availableFunds = 0;
    }
}