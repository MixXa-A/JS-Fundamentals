function firstAndLast (arr){
    if (arr.length<1){
        let firstNum = Number(arr.shift());
        console.log(firstNum+firstNum)
    }else {
        let firstNum = Number(arr.shift());
        let lastNum = Number(arr.pop());
        console.log(firstNum+lastNum);
    }

}
firstAndLast(['20', '30', '40'])