function mergeArr (arr1, arr2){
    let newArr = [];
    

    for (let i = 0; i<arr1.length;i++){
        if (i%2===0){
            let num1 = Number(arr1[i]);
            let num2 = Number(arr2[i]);
            let result = num1+num2;
            newArr.push(result);
        }else{
            let str1 = arr1[i];
            let str2 = arr2[i];
            let result = str1+str2;
            newArr.push(result);
        }
    }
console.log(newArr.join(` - `))
}
mergeArr(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])