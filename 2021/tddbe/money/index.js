function Dollar(amount) {
  this.amount = amount;

  this.times = (multiplier) => {
    this.amount *= multiplier;
  };

  this.equals = (object) => this === object;
}

function Franc(amount) {
  this.amount = amount;

  this.times = (multiplier) => {
    this.amount *= multiplier;
  };

  this.equals = (object) => this === object;
}

export { Dollar, Franc };
