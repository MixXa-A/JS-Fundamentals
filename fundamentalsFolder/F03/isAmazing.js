function isAmazing (num){
const numToString = String(num);
let sumOfNumbers = 0;
for (let i = 0; i<numToString.length;i++){
    sumOfNumbers+=Number(numToString[i])

}
let sumOfNumbersStr = String(sumOfNumbers);
let itsAmazing = `False`;
for(let i = 0; i<sumOfNumbersStr.length;i++){
    if (sumOfNumbersStr[i] == 9 ){
        
     itsAmazing = `True`;
    }else{
        itsAmazing = `False`;
    }
}

console.log(`${num} Amazing? ${itsAmazing}`)



}
 isAmazing(1233) 
isAmazing(999)