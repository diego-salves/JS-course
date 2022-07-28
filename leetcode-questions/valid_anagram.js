/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (map[t[i]] === undefined) {
            return false;
        } else {
            map[t[i]]--;
        }
    }
    for (var key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    return true;
};


console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));