let pet ={
    eats: true
};
let dog= Object.create(pet);
///dog.__proto__= pet;

//console.log(dog.jumps);
console.log(dog.eats);
console.log(Object.getPrototypeOf(dog) === pet);

Object.setPrototypeOf(dog , {});