function listOfProducts(arr){
    
let sortedStr = arr.sort();
let listInOrder = [];
for (let i = 0; i<sortedStr.length;i++){
    let curProduct = sortedStr[i]
   listInOrder.push(`${i+1}.${curProduct}`)

}
console.log(listInOrder.join(`\n`))

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions',

    'Apples'])