function reverseString(string){
    let buff= ``

    for(let i = string.length-1; i>=0;i--){
        let reversedWord = string[i]
        buff+=reversedWord
    }

console.log(buff)
}
reverseString(`Hello`)