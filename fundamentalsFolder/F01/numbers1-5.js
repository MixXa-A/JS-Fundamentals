function numbers (num){
let numsForPrint = 0;
let buff = 0;
let buff2 = ``;

for (let i = 1; i<=Number.MAX_SAFE_INTEGER;i++){

    if (i%2!==0){
        buff+=i
        buff2 += `\n${i} `;
        numsForPrint++
        if(numsForPrint>=num){
            console.log(buff2);
            console.log(`Sum: ${buff}`)
            break;
        }
    }

}
   
}
numbers(5)