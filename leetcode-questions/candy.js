/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
        var n = ratings.length;
        var res = new Array(n);
        res[0] = 1;
        for (var i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                res[i] = res[i - 1] + 1;
            } else {
                res[i] = 1;
            }
        }
        var sum = res[n - 1];
        for (var i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                res[i] = Math.max(res[i], res[i + 1] + 1);
            }
            sum += res[i];
        }
        return sum;
    }

    ratings = [1, 0, 2];
    console.log(candy(ratings));
    ratings = [1, 2, 2];
    console.log(candy(ratings));
