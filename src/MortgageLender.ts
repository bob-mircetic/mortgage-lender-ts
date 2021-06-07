import LoanApplication from "./LoanApplication";

export default class MortgageLender {
    availableFunds: number = 0;
    addFunds(amount:number): number {
        console.log(`FUNDS:           ${amount}`)
        return this.availableFunds += amount;
    };
    approve(loanApp:LoanApplication): void {};
    reviewApplication(reviewApp:LoanApplication): void {};
    sendOffer(offer:LoanApplication): void {};
    pendingFunds: number;
    releaseOffer(release:LoanApplication): void {};
          

    constructor (amount:number) {
        //this.availableFunds += amount;
    }

    // set availableFunds(newVal:number) {
    //     this.availableFunds = newVal;
    // }
}