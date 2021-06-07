import {LoanStatus} from "./LoanStatus";

export default class LoanApplication {
    loanAmount: number;
    loanApproval: string;
    dti: number;  
    isApproved(): boolean {
        return false;             
    } 
    isQualified(): boolean {
        return false;
    }
    creditScore: number;
    savings: number;
    loanStatus: LoanStatus;
        
    constructor(ploanAmount:number,pdti:number,pcreditScore:number,psavings:number){
        this.loanAmount = ploanAmount;
        this.dti = pdti;
        this.creditScore = pcreditScore;
        this.savings = psavings;
    }

}