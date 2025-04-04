function maxSequences (arr){
    let longestSequences = []
    let currMaxSecqences = [arr[0]]

    for (let i = 1;i<arr.length;i++){
        let currentNum = arr[i];

    
        if (currentNum===currMaxSecqences[0]){
          currMaxSecqences.push(currentNum)
            if (currMaxSecqences.length>longestSequences.length){
                longestSequences=currMaxSecqences
              }
            
        }else {
            currMaxSecqences = [currentNum]
        }
        
    

    }
    console.log(longestSequences.join(` `))




}
maxSequences([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequences([0 ,1, 1 ,5 ,2 ,2 ,6, 3 ,3])