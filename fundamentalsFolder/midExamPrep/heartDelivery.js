function heartDelivery(arr) {
let houses = arr.shift().split(`@`).map(Number);
let index = 0;
let command = arr[index];
let cupidonIdx = 0;

while (command!== `Love!`) {
let tokens = command.split(` `);
let idx = Number(tokens[1])



   cupidonIdx+=idx;

    if(cupidonIdx >= houses.length){
      cupidonIdx = 0;
    }
    
    if(houses[cupidonIdx] === 0){
       console.log(`Place ${cupidonIdx} already had Valentine's day.`);
    }else{
        houses[cupidonIdx]-=2;
        if(houses[cupidonIdx]===0){
             console.log(`Place ${cupidonIdx} has Valentine's day.`); 
            
        }
    }
    



index++
command = arr[index];
    
}
console.log(`Cupid's last position was ${cupidonIdx}.`);


let missionSucceed = houses.filter( x=> x !== 0 )

if(missionSucceed.length === 0){
    console.log(`Mission was successful.`);
    
}else{
    console.log(`Cupid has failed ${missionSucceed.length} places.`);
    
}

    
}
heartDelivery(["2@4@2",

"Jump 2",

"Jump 2",

"Jump 8",

"Jump 3",

"Jump 1",

"Love!"])
