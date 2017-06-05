
function isLeapYear(year){

    if( 4 <= year && year <= 1582 && year % 4 === 0){
        return true;
    }

    if(year > 1582 && year % 100 === 0) {
            return (year % 4 === 0 || year % 400 === 0);
    }

      if(year > 1582 && year % 4 === 0) {
            return true;
    }

    return false;
}

module.exports = isLeapYear;