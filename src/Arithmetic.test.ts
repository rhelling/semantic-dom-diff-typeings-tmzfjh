import { expect } from '@open-wc/testing';

describe('Arithmetic', () => {
  it('should add a number', async () => {
    expect(1 + 1).to.equal(2);
    await expect(document.body).dom.to.equal('');
  });
});
