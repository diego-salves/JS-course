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

    if (1 <= s.length <= 15){
       



    } else {
        console.log("can't resolve")
    }
    return s 
    
};


var ret = romanToInt("kkkk")
console.log(ret)
