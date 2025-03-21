function pyramidOfKingDjoser (widthLength, heightOfOneStep){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let row = 1;

    for(let i = widthLength; i>0; i-=2){
  
    height+=heightOfOneStep

     let totalSpacePerStep = i**2
     

     if (i<=2){
        gold+= totalSpacePerStep*heightOfOneStep
     }else{
        let totalStoneArea = (i-2)**2
    
        stone+= totalStoneArea*heightOfOneStep

        if (row % 5 === 0){
            lapis += (totalSpacePerStep-totalStoneArea) * heightOfOneStep
           
         }else{
            marble+= (totalSpacePerStep-totalStoneArea)*heightOfOneStep
         }    


     }
     
     
     
     row++
    }
console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
console.log(`Gold required: ${Math.ceil(gold)}`)
console.log(`Final pyramid height: ${Math.floor(height)}`)

}
pyramidOfKingDjoser(23,0.5)
/**
 * Stone required: 165 
 * Marble required: 112 
 * Lapis Lazuli required: 8 
 * Gold required: 1 
 * Final pyramid height: 6
 */