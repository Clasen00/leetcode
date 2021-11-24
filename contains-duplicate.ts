//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
function containsDuplicate(nums: number[]): boolean {
    let map = new Map();

    for (let value of nums) {
        if (map.get(value) >= 0) {
            return true;
        }
        else {
            map.set(value, 0)
        }
    }
    return false;
};