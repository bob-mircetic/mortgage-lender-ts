import {LoanStatus} from "./LoanStatus";

export default class LoanApplication {
    loanAmount: number;
    loanApproval: string;
    isApproved(): boolean {
        return false;             
    } 
    isQualified(): boolean {
        return false;
    }
    creditScore: number;
    savings: number;
    //loanStatus(loanStat:LoanStatus): void;                            
    //enum LoanStatus {'Pending'};           
    
    constructor(){
        //this.loanAmount = 0;
    
        
    }
}