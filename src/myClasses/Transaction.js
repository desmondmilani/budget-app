class Transaction {
    constructor(item, amount, transactionType, id) {
        this.item = item;
        this.amount = amount;
        this.transactionType = transactionType;
        this.id = id;
    }
}

export default Transaction;