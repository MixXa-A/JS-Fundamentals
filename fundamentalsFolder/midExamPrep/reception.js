function SoftUniReception (arr) {
let employeeOne = Number(arr.shift());
let employeeTwo = Number(arr.shift());
let employeeOThree = Number(arr.shift());
let studentsCount = Number(arr.shift());
let hour = 0;
 while (studentsCount > 0) {
    let totalStudentsPerHour = employeeOne+employeeTwo+employeeOThree;
    hour++
    if(hour%4===0){
        continue;
    }
    studentsCount-=totalStudentsPerHour
    
 }
 console.log(`Time needed: ${hour}h.`);
 
}
SoftUniReception(['1','2','3','45'])