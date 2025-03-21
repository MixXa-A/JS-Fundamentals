function printAPyramad (n){


for (let a = 1; a<=n;  a++){
   
   let nums4print = ``
    for(let b = 1; b<=a; b++){
        nums4print+= a + ` `
    }
    console.log(nums4print)
}



}
printAPyramad(5)