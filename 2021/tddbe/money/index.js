function Dollar(amount) {
  this.amount = amount;

  this.times = () => {
    this.amount = 10;
  };
}

export { Dollar };
