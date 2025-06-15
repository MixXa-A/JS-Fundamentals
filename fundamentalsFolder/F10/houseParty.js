function houseParty(arr){
let nameList = [];

for (const element of arr) {
   let tokens = element.split(` `)
   let name = tokens[0];
   let action

    if(tokens.length<=3){
        action = tokens[2]
    }else{
        action = `not going!`
    }


   let isIncluded = nameList.includes(name);

   if (!isIncluded && action === `going!`){
     nameList.push(name);

   }else if(isIncluded && action === `going!`){
   console.log(`${name} is already in the list!`);
    
   }else if(!isIncluded && action === `not going!`){
   console.log(`${name} is not in the list!`);
    
   }else if(isIncluded && action === `not going!` ){
    let nameIndx = nameList.indexOf(name);
    nameList.splice(nameIndx,1)

   }



}
console.log(nameList.join(`\n`));

}

houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])