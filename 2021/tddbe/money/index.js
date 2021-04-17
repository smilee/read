function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;

  this.times = (multiplier) => {
    this.amount *= multiplier;
  };

  this.equals = (object) => this === object;

  this.plus = (addend) => new Money(this.amount + addend.amount, 'USD');
}

export { Money };
