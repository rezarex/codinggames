/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let t ={}
    for(i = 0; i < nums.length; i++){
       t[nums[i]] = i
    }

    for(j=0; j < nums.length; j++){

        complement = target - nums[j]

        if(t.hasOwnProperty(complement) && (t[complement] !== j)){
            return [j, t[complement]]
        }

    }
};