function convertToObj (jsonStr){

    const jsonInObj = JSON.parse(jsonStr);
     for (const el of Object.keys(jsonInObj)) {
        console.log(`${el}: ${jsonInObj[el]}`);
        
        
     }
    
    

}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')