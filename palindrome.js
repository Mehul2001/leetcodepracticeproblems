// Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


var isPalindrome = function (x) {
    /*
   Strategy
   I: number
   O: boolean
   C: none
   E: none
   */
    var str = String(x);
    var result = true;
    for (var i = 0; i < str.length; i++) {
        for (var j = str.length - 1; j >= 0; j--) {
            if (str[i] !== str[j]) {
                result = false;
            }
            i++;
        }
    }
    return result;
};