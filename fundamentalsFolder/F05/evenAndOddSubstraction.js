function evenAndOddSubstraction (arr){
let odd = 0;
let even = 0;
    for(let i = 0;i<arr.length;i++){
        if (arr[i]%2===0){
            even+=arr[i]
        }else{
            odd+=arr[i]
        }
    }
    let result = even-odd;
    console.log(result)
}
evenAndOddSubstraction([1,2,3,4,5,6])