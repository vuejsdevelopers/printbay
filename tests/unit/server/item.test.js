const expect = require("expect");

const add = (x, y) => x + y;

it(
  "should add two numbers",
  async () => new Promise(resolve => {
    const result = add(2, 3);
    expect(result).toBe(5);
    resolve();
  })
);
