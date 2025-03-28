function daysOfTheWeek (day){
const possibleDays = 
     [`Monday`,`Tuesday`,
     `Wednesday`,`Thursday`,
     `Friday`,`Saturday`,`Sunday`]

let currentDay = possibleDays[day-1]
   if (currentDay != undefined ){
    console.log(currentDay)
   }else{
    console.log(`Invalid day!`)
   }
}
daysOfTheWeek(9)