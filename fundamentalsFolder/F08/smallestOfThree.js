function smallestNumber (numOne, numTwo, numThree){
    let smallestNum = 0;

    if (numOne<numTwo&& numOne<numThree){
      smallestNum=numOne
    } else if (numTwo<numOne&&numTwo<numThree){
        smallestNum=numTwo
    }else{
        smallestNum = numThree
    }
    console.log(smallestNum)
}
smallestNumber(3,2,5)