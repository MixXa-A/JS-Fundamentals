function integerOrFloat (a,b,c){
     let totalSum = a+b+c
     let totalSumStr = String(totalSum)
     let type = `Integer`;

     for(let i = 0; i<totalSumStr.length;i++){
        if (totalSumStr[i] === `.`){
         type = `Float`
        }
       
}
console.log(`${totalSum} - ${type}`)
}
integerOrFloat(9, 100, 1.1)