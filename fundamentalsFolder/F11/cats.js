function cats (arr){

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

    speak () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }
   const result = [];

    for (const cat of arr) {
        const [name, age] = cat.split(` `);
        let catObj = new Cat (name, age);
        result.push(catObj);
        
    }
    
    
   result.forEach(Cat => Cat.speak())
    

}
cats(['Mellow 2', 'Tom 5']) 