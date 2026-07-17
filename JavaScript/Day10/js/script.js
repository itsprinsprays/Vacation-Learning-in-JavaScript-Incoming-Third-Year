let person = {
    "firstName": "Prince",
    "lastName": "Benitez",
    "age": 21,
    "hobbies": ["reading", "traveling", "coding"],
    laptop: {
       0: { 
        brand: "HP" 
       },
       1: { 
        brand: "Lenovo"
       }
    }
    
};
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.hobbies[1]); 
console.log(person.laptop[1].brand);

//updating value
person.firstName = "Jediel";
console.log(`${person.firstName} ${person.lastName}`);

//create new key with value
person.section = "BSIT-2E";
console.log(person);

//convert object to string
let strPerson = JSON.stringify(person);
console.log(strPerson); 

//convert string to object
strPerson = JSON.parse(strPerson);
console.log(strPerson);



//Array of objects

let people = [
    {
        firstName: "Prince",
        lastName: "Benitez",
        age: 21
    },
    {
        firstName: "Jediel",
        lastName: "Benitez",
        age: 22
    }
];

console.log(people[1].firstName);