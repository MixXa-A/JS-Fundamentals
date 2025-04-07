function charectersInRange (char1, char2){

    let charCodeFromAscii = char1.charCodeAt();
    let charCodeFromAscii2 = char2.charCodeAt()
    
 let minNum = Math.min(charCodeFromAscii,charCodeFromAscii2);
 let maxNum = Math.max(charCodeFromAscii,charCodeFromAscii2);
  let charsBetween = ``
 for(let i = minNum +1; i<maxNum;i++){
    charsBetween+=String.fromCharCode(i)+` `;
 }
   console.log(charsBetween)
}
charectersInRange(`a`,`d`)