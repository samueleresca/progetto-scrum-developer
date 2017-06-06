
const pwdCheck = require('./passwordchecker.js');

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
});

test("password must have at least one alphabetical char", ()=>{
    expect(pwdCheck('123456789')).toBe(false);    
});

test("password must have at least one digit", ()=>{
    expect(pwdCheck('asdfghjk')).toBe(false);    
});

test("user password is valid", ()=>{
    expect(pwdCheck('asDFghj3')).toBe(true);    
});

