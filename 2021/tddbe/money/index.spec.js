import { Dollar, Franc } from './index';

describe('Dollar', () => {
  context('when it is created', () => {
    it('has an amount', () => {
      const dollar = new Dollar(5);

      expect(dollar.amount).toBe(5);
    });
  });

  context('when it is multiplied by a multiplier', () => {
    it('returns the multiple', () => {
      const dollar = new Dollar(5);

      dollar.times(2);

      expect(dollar.amount).toBe(10);
    });
  });

  context('when dollars of differing amounts are compared with each other', () => {
    it('returns whether they are equal', () => {
      const five = new Dollar(5);
      const six = new Dollar(6);

      expect(five.equals(six)).toBe(false);
    });
  });
});

describe('Franc', () => {
  context('when it is created', () => {
    it('has an amount', () => {
      const franc = new Franc(5);

      expect(franc.amount).toBe(5);
    });
  });

  context('when it is multiplied by a multiplier', () => {
    it('returns the multiple', () => {
      const franc = new Franc(5);

      franc.times(2);

      expect(franc.amount).toBe(10);
    });
  });

  context('when francs of differing amounts are compared with each other', () => {
    it('returns whether they are equal', () => {
      const five = new Franc(5);
      const six = new Franc(6);

      expect(five.equals(six)).toBe(false);
    });
  });
});
