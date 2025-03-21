function echoType (parameter){

   let buff = typeof parameter


   if (buff == `string` || buff == `number`){
       console.log (buff)
       console.log (parameter)

   }else{
     console.log (buff)
      console.log('Parameter is not suitable for printing') 

   }

}
echoType(`Null`)