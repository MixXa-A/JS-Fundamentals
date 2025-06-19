function shootForTheWin(arr) {
    let targets = arr.shift().split(` `).map(Number);
    let index = 0;
    let command = arr[index];
    let count = 0;
    while(command !== `End`){
    
  let idx = Number(command);
  if(idx >= 0 && idx < targets.length){
   
   let temp = targets.splice(idx, 1, -1)[0];
   count++
   for (let i = 0; i < targets.length; i++) {
    if (targets[i]<=temp && targets[i] !== -1){
        targets[i] += temp
    }else if(targets[i]>temp && targets[i] !== -1){
        targets[i]-=temp
    }
}
  index++
  command = arr[index]
   
  }else{
     index++
     command = arr[index]
    continue;
  }
  
       
    }
    console.log(`Shot targets: ${count} -> ${targets.join(` `)}`);
    
    
}
shootForTheWin(["24 50 36 70",

"0",

"4",

"3",

"1",

"End"])