var reverse = function (x) {
    /*
    Strategy:
    I: number
    O: reverse number
    C: none
    E: deal with negative numbers
    */
    var maxI = Math.pow(2, 31) - 1;
    if (x === 0) {
        return 0;
    }
    if (x > 0) {
        var arr = x.toString().split('');
        var result = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        var op = Number(result.join(''));
        return (Math.abs(op) > maxI) ? 0 : op;
    }
    if (x < 0) {
        var arr = x.toString().split('');
        var remneg = arr.splice(0, 1);
        var result = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            result.push(arr[i]);
        }
        var op = Number("-" + result.join(''));
        return (Math.abs(op) > maxI) ? 0 : op;
    }
};