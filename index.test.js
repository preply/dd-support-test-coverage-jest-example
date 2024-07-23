const { add } = require('./index');

it('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});