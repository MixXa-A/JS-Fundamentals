function equalArr (arr1, arr2){
    let equalSum = 0
    let index = 0;
    let isEqual = false;
for (let a = 0;a<arr1.length;a++){
    arr1[a]=Number(arr1[a])
}

for (let b = 0;b<arr2.length;b++){
    arr2[b]=Number(arr2[b])
}

for(let i = 0; i<arr1.length;i++){
    index++
if (arr1[i]===arr2[i]){
    equalSum+=arr1[i]
    isEqual = true
}else {
    equalSum=0;
    isEqual = false
    console.log(`Arrays are not identical. Found difference at ${index-1} index`)
    break;
}
}
if(isEqual){
    console.log(`Arrays are identical. Sum: ${equalSum}`)
}

}
equalArr(['10','20','30'],

         ['10','20','30'])