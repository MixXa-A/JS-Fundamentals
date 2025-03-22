function specialNum (n){
let integerN = parseInt(n)
for(let i =1; i<=integerN;i++){
    let sum = 0;
    let num = i;

    while(num>0){
        sum+=num%10
        num = Math.floor(num/10)
    }

let isSpecial = `False`
if (sum === 5 || sum ===7 || sum ===11){
    isSpecial = `True`
}else{
    isSpecial = `False`
}
///let isSpecial = (sum === 5 || sum === 7 || sum === 11);
//. кратък начин за цялата проверка по=горе
console.log(`${i} -> ${isSpecial}`)




}



}
specialNum(15)
///Write a program that receives a number n. For all numbers in the range [1…n]
//  print the number and if it is special or not (True / False).

/// A number is special when its sum of digits is 5, 7 or 11.

/***
 * 
 */