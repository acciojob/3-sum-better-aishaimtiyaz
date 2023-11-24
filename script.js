function threeSum(arr, target) {
// write your code here
	function threeSum(nums, target) {
    // Sort the input array
    nums.sort((a, b) => a - b);

    let closestSum = 1000000;
    let closestDiff = 1000000;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const diff = Math.abs(sum - target);

            if (diff < closestDiff) {
                closestDiff = diff;
                closestSum = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(nums, target);
console.log(result); // Output: 2

  
}

module.exports = threeSum;
