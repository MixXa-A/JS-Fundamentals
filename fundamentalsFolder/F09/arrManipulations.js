function arrManipulation (input){
let arrStr = input.shift();
let arr = arrStr.split(` `).map(Number);

for(let i = 0;i<input.length;i++){
    let commands = input[i].split(` `);
    let action = commands[0];
    let token = Number(commands[1]);
    switch(action){
        case`Add`:
        arr.push(token);
        break;
        case`Remove`:
        let idx = arr.indexOf(token)
        if (idx !== -1){
            arr.splice(idx, 1);
        }
        break;
        case`RemoveAt`:
        arr.splice(token, 1);
        break;
        case `Insert`:
            let index = commands[2];
            arr.splice(index,0,token);
            break;
       }
}
     console.log(arr.join(` `));
}
arrManipulation(['4 19 2 53 6 43',

    'Add 3',
    
    'Remove 2',
    
    'RemoveAt 1',
    
    'Insert 8 3'])