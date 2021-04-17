function Dollar(amount) {
  this.amount = amount;

  this.times = (multiplier) => {
    this.amount *= multiplier;
  };
}

export { Dollar };
