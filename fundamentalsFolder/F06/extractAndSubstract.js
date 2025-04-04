function extractAndSubstract (input){
let oldSum = 0;
let newSum = 0;
let newArr = []
    for(let i = 0;i<input.length;i++){
        let currentNum = input[i]
        oldSum+=currentNum
        if (currentNum%2===0){
            currentNum+=i
            newArr.push(currentNum)
        }else{
          currentNum-=i
          newArr.push(currentNum)
        }
    }
   
    for (let i = 0;i<newArr.length;i++){
        let currNewNum = newArr[i];
        newSum+=currNewNum
    }
    console.log(newArr)
    console.log(oldSum)
    console.log(newSum)
}
extractAndSubstract([5, 15, 23, 56, 35])

//Write a function, 
// which changes the value of odd and even numbers in an array of numbers.

//· If the number is even - add to its value its index position

// If the number is odd - subtract to its value its index position

//Output

//On the first line print the newly modified array
// , on the second line print the sum of numbers from the original 
// array, on the third line print the sum of numbers from the modified array.