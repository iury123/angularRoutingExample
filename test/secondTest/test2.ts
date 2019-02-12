import { expect, assert } from 'chai';

it('testing assert 2', () => {
    const x = 10;
    const y = 5 * 2;
    assert(x === y, 'x should be equal y');
});

it('testing expect 2', () => {
    const x = 10;
    const y = 5 * 2;
    expect(x * y).to.be.a('number');
});
