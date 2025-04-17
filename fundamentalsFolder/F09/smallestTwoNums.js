function smallestTwoNums(arr){

    let sortedNums = arr.sort((a,b)=> a-b);
    let firstTwoNums = sortedNums.slice(0,2);
    console.log(firstTwoNums.join(` `));

}
smallestTwoNums([30, 15, 50, 5])