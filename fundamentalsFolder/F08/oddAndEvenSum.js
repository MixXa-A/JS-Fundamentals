function oddAndEvenNum (num){
let oddSum = 0;
let evenSum = 0;
let numAsStr = num + ``;

for (let i = 0; i < numAsStr.length;i++){
    let curentDigit = Number(numAsStr[i]);
    if(curentDigit%2===0){
        evenSum+=curentDigit
    }else{
        oddSum+=curentDigit
    }
}
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)



}
oddAndEvenNum(1000435)