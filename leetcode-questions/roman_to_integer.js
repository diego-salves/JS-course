/**
 * @param {string} s
 * @return {number}
 */

//Given a roman numeral, convert it to an integer.

 var romanToInt = function(s) {
    s = s.toUpperCase();
    var roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var current = roman[s[i]];
        var next = roman[s[i + 1]];
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInt("mcmxcix"));

/*
https://leetcode.com/diegodsa/
*/
