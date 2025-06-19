function manOWar (input){
let pirateShipStatus = input.shift().split(`>`).map(Number);
let warshipStatus = input.shift().split(`>`).map(Number);
const maxHealthCapacity = Number(input.shift());

for (let actions of input){
    let index = actions.split(` `);
    let action = index[0];
    let indx = Number(index[1]);
    switch (action){
        case`Fire`:
       
        if (indx<0||indx>=warshipStatus.length){
            continue;
        }else{
            warshipStatus[indx]-=index[2];
            if (warshipStatus[indx]<=0){
                console.log("You won! The enemy ship has sunken.");
                return; 
            }
        }

        break;

        case `Defend`:
            let endIndx = Number(index[2]);
            let damage = Number(index[3]);
            if (indx<0 || endIndx>=pirateShipStatus.length){
                continue;

            }else{
                for(let i = indx; i<=endIndx; i++){
                    pirateShipStatus[i]-=damage;
                    if (pirateShipStatus[i]<=0){
                       console.log("You lost! The pirate ship has sunken.");
                       return;
                    }
                }
               
            }
            break;
            case`Repair`:
          
          let health = Number(index[2]);
          if (indx<0 || indx>=pirateShipStatus.length){
            continue;
          }else{
        
            if (pirateShipStatus[indx]+health> maxHealthCapacity){
                pirateShipStatus[indx] = maxHealthCapacity

            }else{
                pirateShipStatus[indx] = pirateShipStatus[indx] + health;
            }

          }
            break;
            case `Status`:
             let sectionsForRepair = 0;
             const criticalHealthsections = maxHealthCapacity*0.2
             for (let i = 0; i<pirateShipStatus.length; i++){
                
                if (pirateShipStatus[i]<criticalHealthsections){
                    sectionsForRepair++
                }

             }
             console.log(`${sectionsForRepair} sections need repair.`);


                break;
            default:
                let pirateShipSum = 0;
                let warshipSum = 0;
                for(let j = 0; j<warshipStatus.length; j++){
                    warshipSum+= warshipStatus[j];
                }
                for(let i = 0; i<pirateShipStatus.length; i++){
                    pirateShipSum+= pirateShipStatus[i]
                }
                console.log(`Pirate ship status: ${pirateShipSum}`);
                console.log(`Warship status: ${warshipSum}`);
                
                return;

    }

    
    
}



}
manOWar([`12>13>11>20>66`, `12>22>33>44>55>32>18`, 70, `Fire 2 11`, `Fire 8 100`, `Defend 3 6 11`, `Defend 0 3 5` ,`Repair 1 33` ,`Status` ,`Retire`])