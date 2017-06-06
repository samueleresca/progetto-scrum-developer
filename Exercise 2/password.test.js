
const pwdCheck = require('./passwordchecker.js');

test("pwdCheck is defined", () => {
    expect(pwdCheck).toBeDefined();
});

test("It's a function", () => {
    expect(typeof pwdCheck).toBe("function");
});


test("It takes a parameter", ()=>{
    expect(pwdCheck()).toBe(false);
});

test("It takes a string", ()=>{
    expect(pwdCheck(2)).toBe(false);
});

test("password must be least 8 character", ()=>{
    expect(pwdCheck('1234567')).toBe(false);
    expect(pwdCheck('12345678')).toBe(true);
});


