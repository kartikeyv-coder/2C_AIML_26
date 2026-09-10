let firstName = 'Naurto';
let lastName = 'Uzumaki';

console.log("My name is " + firstName + " " + lastName);
console.log(`My Name is ${lastName} ${firstName}`); 

const FullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

FullName(firstName, lastName);