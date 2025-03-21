function printAndSum (num1, num2){
    let totalSum = 0;
    let nums4Print = ``

    for(let i = num1; i<=num2;i++){
        totalSum+=i
        nums4Print+= i + ` `
        
    }
    console.log(nums4Print)
    console.log(`Sum: ${totalSum}`)

}
printAndSum(5,10)