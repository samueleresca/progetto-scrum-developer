const adminPwdCheck = require('./adminpasswordchecker.js');

test("adminPwdCheck is a function", () => {
    expect(typeof adminPwdCheck).toBe("function");
});

test("password must be least 10 character", ()=>{
    expect(adminPwdCheck('1234567')).toBe(false);
});

