//Given an array, rotate the array to the right by k steps, where k is non-negative.
function rotate(nums: number[], k: number): void {
    if (0 === k) {
        return;
    }
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};