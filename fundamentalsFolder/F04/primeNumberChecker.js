function primeNumbersCheck (num){
let divisibleCounter = 0;

    for(let i = 1;i<=num;i++){
      if (num%i===0){
        divisibleCounter++
      }
    }
if (divisibleCounter>2){
    console.log(`false`)
}else{
    console.log(`true`)
}
}
primeNumbersCheck(7)