function checkAge(age){
    return age >=18
}

console.log('Is adult: ',checkAge(25))
console.log('Is adult: ',checkAge(15))


//function expression

// const userAge = function (age){
//     return age >= 18
// }
// console.log('Is adult: ',userAge(25))
// console.log('Is adult: ',userAge(15))

//arrow function

const userAge = (age) => age >= 18
console.log('Is adult: ',userAge(25))
console.log('Is adult: ',userAge(15))