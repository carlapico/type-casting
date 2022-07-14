
// function sum(x,y) 
const sum = (x,y) => { // ES6 arrow function
        if (y == typeof(x) !="number"){
        return "No no no!"
    }
    if (y=undefined)
    {
        return x 
    }
     else {
        return x + y
    }
}

const results = sum (3,4) 

console.log(results)
