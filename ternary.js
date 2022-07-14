const date = new Date()
console.log (date)

const hour = date.getHours()
console.log(hour)

// let message = "good morning class"

let greeting // global scope

if(hour > 12) {
    greeting='afternoon'
} else {
    greeting ='morning'
}

let message1 = `good ${greeting} class`
console.log(message1)

// same as

let message2 = `good ${hour > 12 ? 'afternoon' : 'morning'} class`
console.log(message2)   

let random= (2 + "5")
console.log(random)
