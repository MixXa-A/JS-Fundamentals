function reverseInPlace (arr){
const endOfTheLoop = Math.floor(arr.length/2)
    for (let i = 0; i<endOfTheLoop ; i++){
        let j = arr.length-1-i;
        let temp = arr[i]
         arr[i]=arr[j]
         arr[j]=temp
        
    }
    console.log(arr.join(` `))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])

//let result = ``
   // for (let i = arr.length - 1; i>=0; i--){
   //     result+=`${arr[i]} `
                                                     //TУК СТОЙНОСТТА Е ПРЕЗАПИСАНА В ПРОМЕНЛИВА, А ГОРНИЯ ПРИМЕР НИ ПОКАЗВА 
                                                     // КАК ДА ПРЕЗАПИСВАМЕ СТОЙНОСТИТЕ В САМИЯ МАСИВ 
                                                     //ПРИМЕР:
                                                     //let i =[0,1,2,3]
                                                     // i[2]=5
                                                     // console.log(i)
                                                    // КАКТО И КАК ДА ИЗПОЛЗВАМЕ ПРОМЕНЛИВА ЗА ВРЕМЕННО СЪХРАНЕНИЕ НА СТОЙНОСТ                                    
  //  }
   // console.log(result)