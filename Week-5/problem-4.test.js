const mathOperations = require('./problem-4.js');
test("Testing : Sum ",()=>{
    expect(mathOperations.sum(2,1)).toBe(3);
})

test("Testing : Difference",()=>{
    expect(mathOperations.diff(8,4)).toBe(4);
})

test("Testing : Product",()=>{
    expect(mathOperations.product(5,1)).toBe(5);
})