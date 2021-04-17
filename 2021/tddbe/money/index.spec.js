import { Dollar } from './index';

describe('Dollar', () => {
  context('when it is created', () => {
    it('has an amount', () => {
      expect(new Dollar(5).amount).toBe(5);
    });
  });
  context('when it is multiplied by a multiplier', () => {
    it('returns the multiple', () => {
      const dollar = new Dollar(5);
      dollar.times(2);
      expect(dollar.amount).toBe(10);
    });
  });
});
