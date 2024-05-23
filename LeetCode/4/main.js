var findMedianSortedArrays = function(nums1, nums2) {
    tempResult = nums1.concat(nums2).sort((a,b) => a - b)

    if (tempResult.length % 2 != 0) {
        return tempResult[Math.floor(tempResult.length/2)]
    } else {
        return ((tempResult[Math.floor(tempResult.length/2)] + tempResult[Math.floor(tempResult.length/2) - 1]) / 2)
    }
};