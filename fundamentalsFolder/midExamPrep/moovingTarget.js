function moovingTarget (arr){
let targets = arr.shift().split(` `).map(Number);
let index = 0;
let command = arr[index];
while (command !== `End`) {
    let [action, idx, power] = command.split(` `);
    idx = Number(idx);
    power = Number(power)
    
    switch (action) {
        case `Shoot`:
            if (idx>= 0 && idx<targets.length){
                targets[idx]-=power;
                if (targets[idx] <= 0){
                    targets.splice(idx,1)
                }
            }
            break;

         case `Strike`:
            let start = idx-power;
            let end = idx+power
            if(start>=0 && end<targets.length){
                targets.splice(start, end-start+1)
            }else{
                console.log("Strike missed!");  
            }
            break;

         case `Add`:

            if (idx>=0 && idx<targets.length){
                targets.splice(idx, 0, power);

            }else{
                console.log("Invalid placement!")
            }
            
            break;
    
        
    }



    index++
    command = arr[index]
}

console.log(targets.join(`|`));


}
moovingTarget((["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"]))