/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].
 */
var twoSum = function (nums, target) {
    /*
    Strategy:
    I: nums (array) and target (number)
    O: return indices of two number which add to the target (array)
    C: none
    E: You may assume that each input would have exactly one solution, and you may not use the same element twice. 
    */
    if (nums.length === 2) {
        return [0, 1];
    }
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        let find = map[n];
        if (find !== undefined) return [find, i];
        else map[nums[i]] = i;
    }
};