function arrayRotation (arr, rotationTimes){
   
 for(let i = 1; i<=rotationTimes;i++){
    let firstEl = arr.shift();
    arr.push(firstEl)
    
 }
 console.log(arr.join(` `))


}
arrayRotation([51, 47, 32, 61, 21], 2)