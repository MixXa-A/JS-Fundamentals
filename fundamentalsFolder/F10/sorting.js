function sorting (arr){
    let sortedArr = arr.sort((a,b)=> b-a);
    let result = [];
    const length = Math.ceil(arr.length/2);
    
    for (let index = 0; index < length; index++) {
        let firstNum = sortedArr.shift()
        let lastNum = sortedArr.pop()
        result.push(firstNum);
        result.push(lastNum);
    }
    console.log(result.join(` `));
    
    

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])