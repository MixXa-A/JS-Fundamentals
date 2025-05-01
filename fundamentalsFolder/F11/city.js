function city (obj){
    for (const el of Object.keys(obj)) {
        console.log(el, `->`,obj[el] )
        
    }

}
city({

    name: "Sofia",
    
    area: 492,
    
    population: 1238438, 
    
    country: "Bulgaria",

    postCode: "1000" })