function sumDigits (n){
 let sum = 0;
 const nInString = String(n)

    for (let i = 0;i<nInString.length;i++ ){
        let currentNum = Number(nInString[i]);
        sum+=currentNum

    }
   console.log(sum)
}
sumDigits(245678)