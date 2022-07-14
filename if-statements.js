// const animal = 'cat' //global scope
// animal = 'Dog'
// animal = 'snake'

// if(animal === 'dog' || animal === 'Dog' || animal === 'snake') {
//     animal = 'snake' // block scoped
// console.log('woof', animal)
// } else {
//     console.log('your animal is', animal)
// }

// let person = 'mammal'
// person= 'not mammal'
// person =false || null || 'test'

// console.log('person before if', person)

// if (person === 'Mammal') {
//     console.log('yes though so!')
// } else if (person && true){
//     console.log('not sure')
// } else if (person === 'not mammal'){
//     console.log('this is catch all')
// } else {
//     console.log('catch all')
// }
// person before if test
//not sure

/**** Date */

// const date = new Date()
// console.log(date)

// const time = date.getTime()
// console.log(time)

// const hours = date.getHours()
// console.log(hours)

// if (hours > 12) {
//   console.log("is past lunch time")
// } else if (hours <= 11.5) {
//   console.log("is almost lunch time")
// }

// const today = date.getDate()
// console.log(today)

// if (today === 12) {
//   console.log("Happy July 12th")
// }
// if (today === 12) console.log("Happy July 12th")


// let possibleValue = true
// let value2 = false

// if (!value2 && //true
//     possible possibleValue && //and also true
//     true && // and also true
//     also allowed) { //and also true
//         console.log('this is truthy');
//     } else {
//         console.log ('this is falsy')
//     }
    
let priceOfFruit = 6 
let total = 0; 

switch (priceOfFruit) {
    case 6: 
        console.log("it's good")
        total = total + priceOfFruit
        break;
    case 5:
        console.log("it's too low")
        total = total + priceOfFruit
        break;
}

// same as 

const result = (priceOfFruit == 6) ? "it's good" : "it's too low"
console.log(result)

const result2 = priceOfFruit || total 
console.log(result2)
