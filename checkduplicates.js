/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    //function creates hashset and deletes duplicates thus changing size...
    let s = new Set(nums)

    if (nums.length != s.size){
        return true
    } else{
        return false
    }
};