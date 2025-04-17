function lastKNums (n,k){
    let result = [1]

    while (result.length<n){
    let lastK = result.slice(-k);
    let sum = 0;
    for (let i = 0; i<lastK.length;i++){
    sum+=lastK[i]
    }
    result.push(sum)
    }
    console.log(result.join(` `))

}
lastKNums(6, 3)