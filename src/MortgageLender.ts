import LoanApplication from "./LoanApplication";

export default class MortgageLender {
    availableFunds: number;
    addFunds(amount:number): void {};
    approve(loanApp:LoanApplication): void {};
    reviewApplication(reviewApp:LoanApplication): void {};
    sendOffer(offer:LoanApplication): void {};
    pendingFunds: number;
    releaseOffer(release:LoanApplication): void {};


    constructor () {
        this.availableFunds = 0;
    }
}