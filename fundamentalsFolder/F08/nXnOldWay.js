function nXnMatrix (num){
let numsInRow = 0;
let columns = 1;
let result = ``
let isRowFull = false;

for (let i = 1; i<=num;i++){


    for (let j = 0; j<=num;j++){
        if (numsInRow<num){
            result+=num + ` `
            numsInRow++
            
        }else{
            isRowFull = true;
            numsInRow = 0;
        }

    }

if (columns<num && isRowFull){
    columns++
    result +=`\n`

}
}

console.log(result)

}
nXnMatrix(3)