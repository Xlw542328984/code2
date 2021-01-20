// 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

var maximumProduct = function(nums) {
    nums.sort((a,b) => b-a);
    let n = nums.length;
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[n-1] * nums[n-2]);
}


var nums = [1,2,3,4,5,6,7,-1,-2,-3,-8,-9];
console.log(maximumProduct(nums));