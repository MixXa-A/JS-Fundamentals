// object definition
let person = {
    name: `MixXa`,
    age: "information not found",
    height: 158
}
console.log(person);

// adding a key and value after definition
person["lastName"] = "Zaykova"

person.city ="Sopot"

console.log(person);

// log a property - key&&Value 
console.log(person.age);
console.log(person[`height`]);
// it can be saved in variable
let myName = person.name
let myLastName = person[`lastName`];  // save only value WITHOUT KEY
console.log( myName, myLastName);
//
//changing  value
// if value is saved in varable before change - varable is not changig
person.name = `MixXaella`
person[`lastName`] = `Z.`
console.log(person);

// delete property
delete person[`lastName`]
console.log(person);
console.log(myLastName); // if its saved in variable before deleting ita stay saved in variable.
//
//--------------------------------------------------------------------------------------------
// WE CAN DEFINE FUNCTIONS(METHODS) IN OBJECTS IN SEVERAL WAYS


let person1 = {
    sayHallo: function(){
        console.log(`hii, guys`);
        
    }
}
person1.sayHallo()
let person2 = {
    sayHallo(){
        console.log(`hiii , guys 2`);
        
    }
}
person2.sayHallo()
let person3 = {    
    
}
person3.sayHallo = () => {
    console.log(`hii3`)}
person3.sayHallo()

//-----------------------------------------------
//making function outside the object;

person.tellName=()=>console.log(person.name);

person.tellName()
 
person.tellAge = function () {
    console.log(`hello`,person.age);
    
}
person.tellAge()
//---------------------------------------------
//object.keys return all keys name in object

let allKeys = Object.keys(person);
console.log(allKeys);

//-------------------------------
//object values return all values
let allValues = Object.values(person)
console.log(Object.values(person));
console.log(allValues);


//--------------------------------------
// object.entries return property
let entries = Object.entries(person)
console.log(entries);








