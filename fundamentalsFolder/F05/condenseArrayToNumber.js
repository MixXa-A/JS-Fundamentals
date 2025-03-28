function condenseArray(nums) {
    let j = nums.length;
    
    while (j > 1) {
        let condensed = [];
        
        for (let i = 0; i < j - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];
        }
        
        nums = condensed; 
        j--;
    }
    
    console.log(nums[0])
}


condenseArray([2, 10, 3]); // 25

/**
 * Hints

While we have more than one element in the array nums[], repeat the following:

· Allocate a new array condensed[] of size nums.Length-1.

· Sum the numbers from nums[] to condensed[]:

o condensed[i] = nums[i] + nums[i+1]

· nums[] = condensed[]
 */