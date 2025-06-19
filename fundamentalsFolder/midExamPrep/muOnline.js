function muOnline (input){
let health = 100;
let bitCoins = 0;
let rooms = input.split(`|`);
let lvl = 0;

for(let room of rooms){
    let tokens = room.split(` `);
    let roomChallenge = tokens[0];
    let value = Number(tokens[1]);
    lvl++

    switch(roomChallenge){
        case `potion`:
            if (health+value>100){
                let diff = 100 - health + value;
                console.log(`You healed for ${Math.abs(diff-value)} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
                
            }else{
                health+=value
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);

            }
            break;
        case `chest`:
            bitCoins+=value;
            console.log(`You found ${value} bitcoins.`);
            
            break;

        default:
            health-=value;
            if(health <= 0){
                console.log(`You died! Killed by ${roomChallenge}.`);
                console.log(`Best room: ${lvl}`);
                return; 
            }else {
                console.log(`You slayed ${roomChallenge}.`);
                
            }


    }

}
console.log(`You've made it!`);
console.log(`Bitcoins: ${bitCoins}`);
console.log(`Health: ${health}`);








}
muOnline(`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`)