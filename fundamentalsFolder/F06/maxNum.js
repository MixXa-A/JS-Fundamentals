function maxNum(arr){
    let currMaxNum = [];
    
    for(let i = 0;i<arr.length;i++){
        let currentNum = arr[i];
        let isBigger = true;

        for(let j = i+1; j<arr.length;j++){
            let comparisonNum = arr[j]

            if (currentNum<=comparisonNum){
                isBigger = false;
                break;
            }
            
        }

        if (isBigger === true){
            currMaxNum.push(currentNum)
        }

    }
    console.log(currMaxNum.join(` `))
    
}
maxNum([14,
    24,
    3,
    19,
    15,
    17])