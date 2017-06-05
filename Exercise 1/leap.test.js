
const isLeapYear = require('./leap.js');


test('Before 3a.c no leap years defined', function(){
    expect(isLeapYear(2)).toBe(false);
});


test('Between 4 and 1582, a leap year is defined divisible by 4', function(){
    expect(isLeapYear(4)).toBe(true);
});

test('Between 4 and 1582, a leap year is not divisible by 4', function(){
    expect(isLeapYear(5)).toBe(false);
});

test('Before 0 no leap years defined', function(){
    expect(isLeapYear(-4)).toBe(false);
});

test('After 1582, a leap year is divisible by 400, not divisible by 100', function(){
    expect(isLeapYear(1600)).toBe(true);
});

test('After 1582, a leap year is divisible by 4, not divisible by 100', function(){
    expect(isLeapYear(1604)).toBe(true);
});


