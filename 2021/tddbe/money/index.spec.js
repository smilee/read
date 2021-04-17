import { Money, Bank } from './index';

describe('Money', () => {
  context('when it is created', () => {
    it('has an amount', () => {
      const money = new Money(5, 'USD');

      expect(money.amount).toBe(5);
    });
  });

  context('when it is multiplied by a multiplier', () => {
    it('returns the multiple', () => {
      const money = new Money(5, 'USD');

      money.times(2);

      expect(money.amount).toBe(10);
    });
  });

  context('when different Money objects are compared with each other', () => {
    it('returns whether they are equal', () => {
      const dollar = new Money(5, 'USD');
      const franc = new Money(5, 'CHF');

      expect(dollar.equals(franc)).toBe(false);
    });
  });

  context('when two Money objects are added to each other', () => {
    it('returns the sum', () => {
      const five = new Money(5, 'USD');
      const sum = five.plus(five);

      expect(sum.amount).toBe(10);
    });
  });

  context('when Money object is given to the bank with a target currency', () => {
    it('is reduced into the target currency', () => {
      const franc = new Money(6, 'CHF');
      const bank = new Bank();
      const inDollars = bank.reduce(franc, 'USD');
      const dollar = new Money(3, 'USD');

      expect(JSON.stringify(inDollars)).toBe(JSON.stringify(dollar));
    });
  });
});
