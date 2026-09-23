
class BankAccount {
    static bankName = 'Apex Bank';

    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log('Insufficient balance')
            return;

        }
        this.balance += amount
        console.log(`amount deposited`)
        this.displayBalance();
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log('Insufficient balance')

            return;
        }

        if (amount > this.balance) {
            console.log('insufficient Balance')
            this.displayBalance
            return
        }

        this.balance -= amount

        console.log(`Successfully withdrew $${amount} from Account #${this.accountNo}.`);
        this.displayBalance();
    }

    displayBalance() {
        console.log(`Current Balance: $${this.balance}\n`)
    }

    static bankInfo() {
        console.log(` Welcome to ${BankAccount.bankName}`);
    }
};

BankAccount.bankInfo();

const account1 = new BankAccount("ACC-69", "kartik", 500);

account1.withdraw(500)
account1.displayBalance()

account1.withdraw(750)
account1.displayBalance()
