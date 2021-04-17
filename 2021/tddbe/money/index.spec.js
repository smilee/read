import { Money } from './index';

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
});
