function bonusScoringSystem(arr) {
const studentCount = Number(arr.shift());
const lecturesCount = Number(arr.shift());
const bonusScore =  Number(arr.shift());
let bestStudent = 0;
let bestBonus = 0;

for (let i = 0; i < arr.length; i++) {
    let currentStudent = Number(arr[i])
    if (currentStudent > bestStudent){
        bestStudent = currentStudent
    }
    let totalBonus = bestStudent/lecturesCount*(5+bonusScore);
    if (totalBonus > bestBonus){
        bestBonus = Math.ceil(totalBonus)
    }
    
}
console.log(`Max Bonus: ${bestBonus}.`);
console.log(`The student has attended ${bestStudent} lectures.`);


}
bonusScoringSystem([

'5', '25', '30',

'12', '19', '24',

'16', '20'

])