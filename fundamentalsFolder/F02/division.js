function division (num){

let lastDivision = 0;

for (let i =2; i<=10;i++){
    if (i!==4 && i!==5 && i!==8 && i!==9){
        if (num%i===0){
            lastDivision=i
        }
    }
}
if (lastDivision!==0){
    console.log(`The number is divisible by ${lastDivision}`)
}else{
    console.log("Not divisible")
}

}
division(185745155)