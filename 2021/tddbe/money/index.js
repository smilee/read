function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;

  this.times = (multiplier) => {
    this.amount *= multiplier;
  };

  this.equals = (object) => this === object;

  this.plus = (addend) => new Money(this.amount + addend.amount, 'USD');
}

function Bank() {
  this.rates = new Map();
  this.rates.set(JSON.stringify(['CHF', 'USD']), 2);
  this.rates.set(JSON.stringify(['USD', 'USD']), 1);

  this.reduce = (subject, target) => {
    const rate = this.rates.get(JSON.stringify([subject.currency, target]));

    return new Money(Number(subject.amount / rate), target);
  };
}

function Wallet() {
  this.reserve = {};

  this.add = (money) => {
    const augend = money.currency in this.reserve
      ? this.reserve[money.currency].amount : 0;
    const addend = money.amount;

    this.reserve[money.currency] = new Money(augend + addend, money.currency);
  };

  this.reduce = (bank, target) => {
    const amount = Object.values(this.reserve).reduce((sum, value) => {
      const toTarget = bank.reduce(new Money(value.amount, value.currency), target).amount;
      return sum + toTarget;
    }, 0);
    return new Money(amount, target);
  };
}

const wallet = new Wallet();
const dollar = new Money(5, 'USD');
const franc = new Money(4, 'CHF');
const bank = new Bank();
wallet.add(dollar);
wallet.add(franc);
const inDollars = wallet.reduce(bank, 'USD');
console.log(`I have ${inDollars.amount} ${inDollars.currency}.`);

export { Money, Bank, Wallet };
