import { Dollar } from './index';

describe('Dollar', () => {
  context('when it is created', () => {
    it('has an amount', () => {
      expect(new Dollar(5).amount).toBe(5);
    });
  });
});
