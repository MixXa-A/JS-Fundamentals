function loadingBar (percent){

function percentIlustrator (num){
let symbolCount = num/10;
let dotCounter = 10-symbolCount;
let percents = `%`.repeat(symbolCount);
let dots = `.`.repeat(dotCounter)
return `[${percents}${dots}]`
}
const percentFunction = percentIlustrator(percent);
if (percent === 100){
    console.log(`${percent}% Complete!`)
    console.log(percentFunction)
}else{
    console.log(`${percent}% ${percentFunction}`)
    console.log(`Still loading...`)
}




}
loadingBar(30)