function searchForNumber(arr, input) {
    let [takenEl, countForDeleting,searchedNum] = input;
    let arrCopy = arr.slice()
    let splicedEl = arrCopy.splice(0,takenEl);
    splicedEl.splice(0,countForDeleting);
    let counter = 0;
   
   while(splicedEl.includes(searchedNum)){
    let idx = splicedEl.indexOf(searchedNum)
    splicedEl.splice(idx,1)
       counter++;

   }
    
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
    
    
    
}
searchForNumber([7, 1, 5, 8, 2, 7],

[3, 1, 5])