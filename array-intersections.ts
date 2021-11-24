/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/
function intersect(nums1: number[], nums2: number[]): number[] {
    let biggestArray: number[] = []
    let smallerArray: number[] = []
    
    if (nums1.length >= nums2.length) {
        biggestArray = nums1;
        smallerArray = nums2
    }
    else {
        biggestArray = nums2;
        smallerArray = nums1
    }

    const result = [];
    
    biggestArray.map((num) => {
        let index = smallerArray.indexOf(num)
        if (index !== -1) {
            result.push(num)
            smallerArray.splice(index, 1);
        }
    });

    return result
};