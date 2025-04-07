function nXnMatrix(num){
    let result = []
    function rowMaker(num){
        let result = []
        for (let i = 0;i<num;i++){
            result.push(num);
        }
        return result.join(` `);
    }
for (let i = 0; i < num; i++){
    const rowInvoking = rowMaker(num);
    result.push(rowInvoking)
    
    
}
console.log(result.join(`\n`))
}
nXnMatrix(3)