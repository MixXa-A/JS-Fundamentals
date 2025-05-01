function convertToObj (jsonStr){

    const obj = JSON.parse(jsonStr);

    for (const [key,element] of Object.entries(obj)) {
        console.log(`${key}: ${element}`);
    }

}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')