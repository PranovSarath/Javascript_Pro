class BankAccount{
    constructor(accountHolder, accountNumber, balance=0){
        if (!Number.isFinite(accountNumber) || accountNumber < 0)
            throw new Error(`Account Number needs to a finite amount and cannot be less than 0!: ${accountNumber}`);
        if (!Number.isFinite(balance) || balance < 0)
            throw new Error(`Balance needs to a finite amount and cannot be less than 0!: ${balance}`);
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amt) {
        if (!Number.isFinite(amt) || amt < 0)
            throw new Error(`Deposit amount needs to be a number and cannot be less than 0: ${amt}`)
        this.balance = this.balance + amt;
        return `Deposited $${amt}. New balance is $${this.balance}`;
    }

    withdraw(amt){
        if (!Number.isFinite(amt) || amt < 0)
            throw new Error(`Withdraw amount needs to be a number and cannot be less than 0: ${amt}`)
        if (this.balance - amt < 0)
            throw new Error('Sufficient balance unavailable in account');
        this.balance = this.balance - amt;
        return `$${amt} withdrawn from account. New balance is $${this.balance}`;
    }

    getDetails(){
        return `Bank Account Holder Name: ${this.accountHolder}
        Bank Account Number: ${this.accountNumber}
        Bank Balance: ${this.balance}`;
    }
}