function equalSums (input){
let doWeHaveMatch = false;

for(let i =0; i<input.length;i++){
    let leftSum = 0;
    let rightSum = 0;

    for(let j = i-1;j>=0;j--){
        let currLeftNum = input[j]
        leftSum+=currLeftNum
        
    }

    for(let k = i+1;k<input.length;k++){
        let currRightNum = input[k]
        rightSum+=currRightNum
    }

    if (rightSum===leftSum){
        doWeHaveMatch = true;
        console.log(i)
    }

}
if (!doWeHaveMatch){
    console.log(`no`)
}



}
equalSums([1, 2,3,3])