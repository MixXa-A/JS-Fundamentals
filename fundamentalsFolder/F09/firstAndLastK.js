function firstAndLastK (arr){
    const k = arr.shift();

    if (arr.length<k){
        console.log(arr.join(` `))
    }else{
        let firstLineElements = arr.slice(0,k)
    let secondLineElements = arr.slice(-k)
    console.log(firstLineElements.join(` `));
    console.log(secondLineElements.join(` `));

    }
    
}
firstAndLastK([2,3])