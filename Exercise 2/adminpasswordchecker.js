const pwdCheck = require('./passwordchecker.js');

var adminPasswordCheck = (password) => {
    if (password.length < 11) {
        return false;
    }

};

module.exports = adminPasswordCheck;