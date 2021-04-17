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

  this.reduce = (subject, target) => {
    const rate = this.rates.get(JSON.stringify([subject.currency, target]));

    return new Money(subject.amount / rate, target);
  };
}

export { Money, Bank };
