function sumEvenNumbers (arr){
let result = 0;
    for (let i = 0;i<arr.length;i++){
        let digitsFromTheArr = Number(arr[i]);
        if(digitsFromTheArr % 2 === 0){
           result+=digitsFromTheArr
        }
    }
console.log(result)
}
sumEvenNumbers(['1','2','3','4','5','6'])